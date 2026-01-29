# Budhiworks - Homepage

A futuristic, minimal, premium homepage for Budhiworks built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✨ Futuristic design with grid patterns and glow effects
- 🌓 Dark/Light mode support
- 📱 Fully responsive across all devices
- 🎨 Premium UI with subtle animations
- ⚡ Optimized performance with React Server Components
- 🎭 Smooth scroll animations with Framer Motion

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next-themes** (Dark/Light mode)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Spline 3D Integration

The Hero section includes a placeholder for a Spline 3D scene. To integrate:

1. Create your 3D scene in [Spline](https://spline.design)
2. Export and get the embed URL
3. Replace the placeholder in `components/sections/Hero.tsx`:

```tsx
// Install @splinetool/react-spline
npm install @splinetool/react-spline

// In Hero.tsx, replace the placeholder div with:
import Spline from '@splinetool/react-spline';

<Spline scene="https://prod.spline.design/YOUR_SCENE_URL.splinecode" />
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── Tile.tsx        # Reusable tile/card component
│   │   └── SectionHeader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhyTrustUs.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   ├── HowWeHelp.tsx
│   │   ├── Process.tsx
│   │   ├── CaseStudies.tsx
│   │   └── FinalCTA.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
└── tailwind.config.ts      # Tailwind configuration
```

## Design System

### Colors

- **Dark Base**: `#0B0F19`
- **Accent Blue**: `#4F7DF3`
- **Accent Cyan**: `#22D3EE`
- **Tile Background**: `rgba(255, 255, 255, 0.03)` (dark mode)
- **Tile Border**: `rgba(255, 255, 255, 0.06)` (dark mode)

### Grid Pattern

The grid background uses a subtle 16px × 16px pattern with low opacity for depth.

### Animations

- Subtle hover lifts on tiles (4-6px)
- Fade-in on scroll for sections
- Smooth transitions (200-300ms)
- No heavy animations for performance

## Customization

### Updating Content

Edit the data arrays in each section component:
- `components/sections/Services.tsx`
- `components/sections/Solutions.tsx`
- `components/sections/CaseStudies.tsx`
- etc.

### Styling

Modify `tailwind.config.ts` for theme colors and utilities.
Update `app/globals.css` for global styles.

## License

Private - Budhiworks
