"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Galaxy variant types
export type GalaxyVariant = "home" | "services" | "solutions" | "work" | "company" | "contact";

// Galaxy configuration interface
interface GalaxyConfig {
  particles: number;
  colorInside: string;
  colorOutside: string;
  radius: number;
  branches: number;
  spin: number;
  randomStrength: number;
  size: number;
  opacity: number;
  rotationSpeed: number;
  scrollRotationMultiplier: number;
  scrollParallaxMultiplier: number;
}

// Galaxy variant configurations
const galaxyConfigs: Record<GalaxyVariant, GalaxyConfig> = {
  home: {
    particles: 50000,
    colorInside: "#ffffff",
    colorOutside: "#1e88e5", // Blue
    radius: 20,
    branches: 8,
    spin: 0.5,
    randomStrength: 0.5,
    size: 0.02,
    opacity: 0.8,
    rotationSpeed: 0.01,
    scrollRotationMultiplier: 8,
    scrollParallaxMultiplier: 5,
  },
  services: {
    particles: 50000,
    colorInside: "#ffffff",
    colorOutside: "#9c27b0", // Purple
    radius: 20,
    branches: 8,
    spin: 0.5,
    randomStrength: 0.5,
    size: 0.02,
    opacity: 0.8,
    rotationSpeed: 0.01,
    scrollRotationMultiplier: 8,
    scrollParallaxMultiplier: 5,
  },
  solutions: {
    particles: 55000,
    colorInside: "#ffffff",
    colorOutside: "#00bcd4", // Cyan
    radius: 22,
    branches: 7,
    spin: 0.6,
    randomStrength: 0.55,
    size: 0.022,
    opacity: 0.82,
    rotationSpeed: 0.012,
    scrollRotationMultiplier: 9,
    scrollParallaxMultiplier: 5.5,
  },
  work: {
    particles: 58000,
    colorInside: "#ffffff",
    colorOutside: "#ff6b35", // Orange
    radius: 24,
    branches: 5,
    spin: 0.65,
    randomStrength: 0.7,
    size: 0.023,
    opacity: 0.83,
    rotationSpeed: 0.013,
    scrollRotationMultiplier: 9.5,
    scrollParallaxMultiplier: 6,
  },
  company: {
    particles: 52000,
    colorInside: "#ffffff",
    colorOutside: "#4caf50", // Green
    radius: 21,
    branches: 8,
    spin: 0.55,
    randomStrength: 0.5,
    size: 0.021,
    opacity: 0.8,
    rotationSpeed: 0.011,
    scrollRotationMultiplier: 8.5,
    scrollParallaxMultiplier: 5,
  },
  contact: {
    particles: 54000,
    colorInside: "#ffffff",
    colorOutside: "#e91e63", // Pink
    radius: 23,
    branches: 6,
    spin: 0.6,
    randomStrength: 0.6,
    size: 0.024,
    opacity: 0.84,
    rotationSpeed: 0.014,
    scrollRotationMultiplier: 9,
    scrollParallaxMultiplier: 5.8,
  },
};

// Galaxy component that creates procedural stars
function Galaxy({
  scrollProgress,
  config
}: {
  scrollProgress: number;
  config: GalaxyConfig;
}) {
  const points = useRef<THREE.Points>(null);
  const particles = config.particles;

  // Generate positions for stars
  const positions = useRef(new Float32Array(particles * 3));
  const colors = useRef(new Float32Array(particles * 3));
  const sizes = useRef(new Float32Array(particles));
  const originalPositions = useRef(new Float32Array(particles * 3));

  useEffect(() => {
    const colorInside = new THREE.Color(config.colorInside);
    const colorOutside = new THREE.Color(config.colorOutside);

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;

      // Spiral galaxy distribution
      const radius = Math.random() * config.radius;
      const spinAngle = radius * config.spin;
      const branchAngle = ((i % config.branches) / config.branches) * Math.PI * 2;

      const randomX = (Math.random() - 0.5) * config.randomStrength;
      const randomY = (Math.random() - 0.5) * config.randomStrength;
      const randomZ = (Math.random() - 0.5) * config.randomStrength;

      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      positions.current[i3] = x;
      positions.current[i3 + 1] = y;
      positions.current[i3 + 2] = z;

      originalPositions.current[i3] = x;
      originalPositions.current[i3 + 1] = y;
      originalPositions.current[i3 + 2] = z;

      // Color mixing
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / config.radius);
      colors.current[i3] = mixedColor.r;
      colors.current[i3 + 1] = mixedColor.g;
      colors.current[i3 + 2] = mixedColor.b;

      // Size variation
      sizes.current[i] = Math.random();
    }
  }, [config, particles]);

  useFrame((state) => {
    if (!points.current) return;

    const elapsedTime = state.clock.getElapsedTime();

    // Base rotation with configurable speed
    // Fast scroll response with configurable multiplier
    points.current.rotation.y = elapsedTime * config.rotationSpeed + scrollProgress * Math.PI * config.scrollRotationMultiplier;
    points.current.rotation.x = scrollProgress * Math.PI * 2;

    // Move stars based on scroll - create parallax effect
    const positionsAttr = points.current.geometry.attributes.position;
    // Scroll factor with configurable multiplier
    const scrollFactor = scrollProgress * config.scrollParallaxMultiplier;

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      const origX = originalPositions.current[i3];
      const origY = originalPositions.current[i3 + 1];
      const origZ = originalPositions.current[i3 + 2];

      // Base movement with configurable speed
      // Scroll-based parallax movement
      const parallaxX = Math.sin(elapsedTime * 0.05 + i * 0.0001) * 0.1 + Math.sin(scrollProgress * Math.PI * 4 + i * 0.0001) * scrollFactor;
      const parallaxY = Math.cos(elapsedTime * 0.05 + i * 0.0001) * 0.1 + Math.cos(scrollProgress * Math.PI * 4 + i * 0.0001) * scrollFactor;
      const parallaxZ = Math.sin(elapsedTime * 0.03 + i * 0.0001) * 0.1 + Math.sin(scrollProgress * Math.PI * 3 + i * 0.0001) * scrollFactor;

      positionsAttr.array[i3] = origX + parallaxX;
      positionsAttr.array[i3 + 1] = origY + parallaxY;
      positionsAttr.array[i3 + 2] = origZ + parallaxZ;
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles}
          array={positions.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles}
          array={colors.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles}
          array={sizes.current}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={config.size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent
        opacity={config.opacity}
      />
    </points>
  );
}

export function GalaxySection({ variant = "home" }: { variant?: GalaxyVariant }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const config = galaxyConfigs[variant];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get hero section - it's the first section after navbar
      const main = document.querySelector("main");
      const hero = main?.querySelector("section:first-of-type") as HTMLElement;
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight : windowHeight;

      // Get footer position (where galaxy ends)
      const footer = document.querySelector("footer") as HTMLElement;
      const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;

      // Smooth fade in when hero ends
      const fadeStart = heroEnd - windowHeight * 0.3;
      const fadeEnd = heroEnd + windowHeight * 0.2;

      let newOpacity = 0;
      // Always show galaxy after hero section starts scrolling
      if (scrollY >= fadeStart && scrollY < footerTop) {
        if (scrollY < fadeEnd) {
          // Fade in smoothly
          newOpacity = Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart));
        } else {
          // Fully visible
          newOpacity = 1;
        }
      }
      // Ensure galaxy is visible after hero section - make it appear earlier
      if (scrollY >= heroEnd * 0.3) {
        newOpacity = Math.max(newOpacity, 0.6);
      }
      // Always show at least some opacity when past hero
      if (scrollY >= heroEnd) {
        newOpacity = Math.max(newOpacity, 0.7);
      }
      setOpacity(newOpacity);

      // Calculate scroll progress from hero end to footer
      const galaxyStart = heroEnd;
      const galaxyEnd = footerTop;
      const galaxyLength = Math.max(1, galaxyEnd - galaxyStart);

      // Progress: 0 at hero end, 1 at footer
      let progress = 0;
      if (scrollY >= galaxyStart) {
        const scrolled = scrollY - galaxyStart;
        progress = Math.min(1, scrolled / galaxyLength);
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    const handleResize = () => {
      handleScroll();
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll(); // Initial call

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 w-full bg-black transition-opacity duration-1000 ease-out"
      style={{
        zIndex: -1,
        pointerEvents: "none",
        height: "100vh",
        top: 0,
        left: 0,
        opacity: opacity
      }}
    >
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Galaxy scrollProgress={scrollProgress} config={config} />
        </Canvas>
      </div>
    </section>
  );
}
