# Website Performance Audit – Buddhiworks

**Audit date:** February 2025  
**Stack:** Next.js 14, React 18, Framer Motion, Three.js / React Three Fiber

---

## Executive summary

The site is **heavy on first load** due to:

1. **Very large images** (logo ~2.3 MB, project images up to ~4 MB each).
2. **Heavy 3D backgrounds** (Three.js/R3F) and many CSS particles on the hero.
3. **Framer Motion and scroll-driven effects** in the Navbar on every page.
4. **Decorative hero images** on service pages loaded with `priority`, competing with LCP.

Build shows **First Load JS ~161 kB** for the home page (shared ~87 kB + page chunks). The main cost is Three.js/R3F and Framer Motion in the critical path.

---

## 1. Images

### 1.1 Logo (`/public/images/logo.png`)

| Issue | Detail |
|-------|--------|
| **Size** | **~2.3 MB** – far too large for a navbar/icon asset. |
| **Usage** | Navbar (priority), Footer (lazy), favicon/apple icon in metadata. |
| **Impact** | Even with Next Image optimization, the source is fetched; large file delays LCP and favicon. |

**Recommendations:**

- Export logo at **multiple sizes** (e.g. 252×63 for navbar, 48×48 for favicon) and **WebP/AVIF**.
- Compress PNG to **&lt; 100 KB** for the main logo; aim **&lt; 20 KB** for favicon.
- Use `sizes` on `<Image>` so Next serves an appropriate responsive variant (e.g. smaller on mobile).

### 1.2 Project images (`/public/images/projects/`)

| Issue | Detail |
|-------|--------|
| **Total** | **~59 MB** for project assets. |
| **Examples** | manileela-1.png ~3.9 MB, avan-1.png ~4.2 MB, many 1–2.5 MB. |
| **Usage** | CaseStudies, FeaturedProjects, MoreWork, project detail pages. |

**Recommendations:**

- Resize to **max width ~1200–1400 px** (or per breakpoint) and compress.
- Prefer **WebP** (or AVIF) with **quality ~75–80**; keep PNG only where needed.
- Rely on Next `Image` with correct `sizes` (already partially in place); ensure all project images go through `next/image` with lazy loading for below-the-fold.

### 1.3 Service detail hero background (Unsplash)

| Issue | Detail |
|-------|--------|
| **Usage** | Full-bleed background at **opacity 0.07** (decorative). |
| **Current** | `priority={true}`, `quality={50}`, `sizes="(max-width: 768px) 100vw, 1920px"`. |
| **Impact** | Competes with real LCP (text/heading); 1920px image is unnecessary for a subtle tint. |

**Recommendations:**

- Set **`priority={false}`** so it doesn’t compete with LCP.
- Lower **quality** (e.g. **25–35**) and/or request **smaller width** in URL (e.g. `w=800` or `w=1200`) for this decorative use.
- Keep **`sizes`** conservative (e.g. `(max-width: 768px) 100vw, 1200px`).

---

## 2. JavaScript & bundles

### 2.1 First Load JS

- **Home:** ~161 kB (page ~7.6 kB + shared ~87 kB + chunks).
- **Other pages:** ~151–157 kB (smaller page chunks, same shared deps).
- **Largest chunks:** e.g. **~53.6 kB** and **~31.7 kB** – consistent with **Three.js + R3F** and **Framer Motion**.

### 2.2 Three.js / React Three Fiber

| Location | Content | Concern |
|----------|--------|--------|
| **FuturisticHeroBackground** (home) | 100 instanced particles, 60×60 terrain, 30 EnergyStream spheres, 50+60 CSS particles | High GPU/CPU on load and scroll. |
| **ServicesHeroBackground** (services) | 200 hex particles, 80×80 terrain, extra geometry | Heavier than home hero. |
| **StartConversationVisual** | Particles + waves | Loaded dynamically; still heavy when page is opened. |

**Recommendations:**

- **Reduce particle/vertex counts** (e.g. 100→60, 200→100, 80×80→60×60) for better FPS and TTI.
- **Lower Canvas `dpr`** (e.g. cap at 1.5 on mobile) to reduce pixel work.
- Consider **pausing or simplifying 3D when tab is hidden** (e.g. `frameloop="demand"` or visibility check).
- Keep **dynamic import with `ssr: false`** for all 3D; optional **loading** placeholder is already used on start-conversation.

### 2.3 Framer Motion

- Used in **Navbar** (scroll, transforms, particle shimmers), **Hero**, **CaseStudies**, **FloatingWhatsApp**, etc.
- **Navbar** is **not** code-split; it’s imported directly on every page, so Framer Motion is in the main bundle for all routes.
- **`optimizePackageImports`** for `framer-motion` is set in `next.config.js` – good.

**Recommendations:**

- **Simplify Navbar:** fewer `useTransform`/scroll-driven values, or replace some effects with CSS (e.g. `backdrop-blur` + transitions).
- Consider **dynamic import** for Navbar with a simple static shell for first paint, then hydrate (trade-off: slight layout shift vs smaller initial JS).
- Prefer **CSS animations** for simple hover/scroll effects where possible.

### 2.4 Fonts

- **Sora** and **Inter** via `next/font/google` with `display: "swap"` and `preload: true` – good.
- No change needed unless you add more font weights; keep only the ones you use.

---

## 3. Rendering & layout

### 3.1 Layout and loading

- **Root layout** loads **ThemeProvider**, **FloatingWhatsApp**, and global CSS – all reasonable.
- **`loading.tsx`** exists and shows a spinner – good for perceived performance during navigation.
- **Dynamic imports** are used for below-the-fold sections on the home page (WhyTrustUs, Services, Solutions, etc.) – good.

### 3.2 Navbar

- **Particle shimmer:** 6 `motion.div` elements with infinite animation.
- **Scroll:** `useScroll`, `useTransform` for blur, Y offset, border opacity.
- **Theme:** `useTheme` and conditional styles.

**Recommendations:**

- Reduce to **2–3** particle elements or replace with a single CSS animation.
- Throttling scroll (e.g. 16 ms) is already in place – keep it.
- Ensure **`will-change`** is used sparingly (e.g. only during animation) to avoid unnecessary layers.

### 3.3 CSS (globals.css)

- Many **keyframe animations** (float, sparkle, pulse, etc.) – used by hero and UI.
- **No critical issue**; consider **reducing simultaneous animations** on low-end devices (e.g. `prefers-reduced-motion` or a “reduce motion” toggle).

---

## 4. Next.js configuration

Current config is generally good:

- **compress**, **swcMinify** – on.
- **images:** AVIF/WebP, `minimumCacheTTL`, **remotePatterns** for Unsplash – good.
- **optimizePackageImports** for `framer-motion` and `@react-three/fiber` – good.
- **optimizeCss: true** (experimental) – helps with CSS size.
- **removeConsole** in production – good.

**Optional:**

- Add **bundle analyzer** (e.g. `@next/bundle-analyzer`) once to confirm which modules dominate the 53 kB / 31 kB chunks.
- Consider **image `sizes`** and **deviceSizes** so large viewports don’t over-fetch (e.g. cap at 1920 for content images).

---

## 5. Prioritized action list

| Priority | Action | Impact | Effort |
|----------|--------|--------|--------|
| **P0** | Compress logo to &lt; 100 KB and provide small favicon (e.g. 48×48, &lt; 20 KB) | High (LCP, favicon) | Low (export/compress) |
| **P0** | Service detail hero: `priority={false}`, lower quality (25–35), smaller `sizes` / image width | High (LCP on service pages) | Low (code change) |
| **P1** | Resize and compress all project images (max ~1200 px, WebP, quality ~80) | High (page weight, especially /work, project pages) | Medium (batch export/script) |
| **P1** | Reduce 3D particle/terrain counts in FuturisticHeroBackground and ServicesHeroBackground | Medium–high (TTI, FPS) | Low (tweak numbers) |
| **P1** | Reduce Navbar particle shimmers (6 → 2–3) or replace with CSS | Medium (main thread, every page) | Low |
| **P2** | Add `sizes` to Navbar logo Image for responsive srcset | Medium (saves bytes on small screens) | Low |
| **P2** | Consider `frameloop="demand"` or visibility-based pause for 3D when tab hidden | Medium (battery, background tabs) | Medium |
| **P3** | Optional: dynamic import Navbar with static shell for first paint | Medium (smaller initial JS) | Medium (UX testing) |
| **P3** | Run bundle analyzer and trim unused dependencies | Low–medium | Low |

---

## 6. Quick wins already applied (in code)

- **ServiceDetailHero:** Background image no longer `priority`; quality reduced; Unsplash URLs use `w=1200&q=60`.
- **Navbar logo:** `sizes` added for responsive loading.
- **Navbar:** Particle shimmers reduced (6→2); active nav glow moved to CSS (`activeGlowPulse`) to free main thread.
- **PageBackground (critical for “No CPU idle”):**
  - **Deferred 3D:** Three.js/R3F loads only after **3.2s** (setTimeout), so first paint and LCP are not blocked.
  - **No 3D on mobile:** For viewport width ≤1024px, only **static CSS background** (`StaticHeroBackground`) is shown; no Canvas, no Three.js bundle.
- **All 3D Canvases (FuturisticHeroBackground, ServicesHeroBackground, StartConversationVisual):**
  - **`frameloop="demand"`** so frames run only when requested.
  - **Visibility invalidator:** `invalidate()` is called only when `document.visibilityState === "visible"`, so when the tab is in the background (e.g. Lighthouse), the loop stops and the **CPU can reach idle**.
  - **Reduced geometry/particles:** Terrain segments 60→40 or 80→50, particles 70→45 or 120→70, EnergyStream 30→12 spheres, torus 64→32, etc.
  - **Lower `dpr`:** `[1, 2]` → `[1, 1.5]` to reduce pixel work.
- **FuturisticHeroBackground:** CSS particle counts 25→25, 30→30 (already reduced earlier); 3D particles 70→45.
- **ServicesHeroBackground:** Hex particles 120→70, terrain 80→50, OrbitalRings torus 64→32, FloatingGeometricShapes 15→8, CSS particles 30→15 and 60→25.
- **StartConversationVisual:** Particles 80→50, waves 80→50, LightRays 8→4.

---

## 7. How to re-check performance

- **Lighthouse** (DevTools → Lighthouse): run for Performance, focus on LCP, TTI, CLS.
- **Next build:** `npm run build` – watch “First Load JS” and chunk sizes.
- **Real device:** Test on a mid-range Android or throttled CPU to see 3D and animation impact.

After image compression and the above code changes, expect **noticeably faster LCP** and **smoother scrolling**, especially on slower devices and high-DPI screens.
