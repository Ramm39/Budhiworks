"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Scroll progress hook
function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = Math.max(1, documentHeight - windowHeight);

        // Overall scroll progress (0 to 1)
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollProgress;
}

// Floating particles component - EXACTLY like hero section
function FloatingParticles({ count = 150, scrollProgress = 0 }: { count?: number; scrollProgress?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() * 0.015;
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      const z = Math.random() * 200 - 100;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);

      // Gradually expand particle movement area as we scroll
      const expansionFactor = 1 + scrollProgress * 0.3;

      const nx = x + Math.cos(t) * factor * expansionFactor;
      const ny = y + Math.sin(t * 2) * factor * expansionFactor - scrollProgress * 30;
      const nz = z + Math.cos(t * 1.5) * factor * expansionFactor;

      const matrix = new THREE.Matrix4();
      matrix.setPosition(nx, ny, nz);
      matrix.scale(new THREE.Vector3(0.3, 0.3, 0.3));

      meshRef.current!.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial
        color="#4F7DF3"
        emissive="#4F7DF3"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

// Digital terrain/waves component - EXACTLY like hero, with gradual depth evolution
function DigitalTerrain({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const overlayRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(200, 200, 100, 100);
    const positions = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] = Math.sin(distance * 0.1) * 2 + Math.sin(x * 0.05) * 1.5;
    }

    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !overlayRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position.array as Float32Array;

    // Gradually increase wave depth and complexity as we scroll
    const depthMultiplier = 1 + scrollProgress * 0.4;
    const complexityMultiplier = 1 + scrollProgress * 0.2;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] =
        Math.sin(distance * 0.1 + time * 0.5) * 2 * depthMultiplier +
        Math.sin(x * 0.05 + time * 0.3) * 1.5 * depthMultiplier +
        Math.sin(y * 0.05 + time * 0.4) * 1 * depthMultiplier +
        Math.sin((x + y) * 0.02 * complexityMultiplier + time * 0.2) * 0.5 * scrollProgress;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Gradually move terrain deeper and slightly rotate
    meshRef.current.position.y = -30 - scrollProgress * 20;
    overlayRef.current.position.y = -29.5 - scrollProgress * 20;

    // Subtle rotation based on scroll
    meshRef.current.rotation.z = scrollProgress * 0.05;
    overlayRef.current.rotation.z = scrollProgress * 0.05;
  });

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -30, 0]}>
        <meshStandardMaterial
          color="#0a0e1a"
          emissive="#1a2332"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>
      {/* Holographic overlay layer - gradually increase opacity */}
      <mesh ref={overlayRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -29.5, 0]}>
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.3}
          transparent
          opacity={0.1 + scrollProgress * 0.05}
          wireframe
        />
      </mesh>
    </>
  );
}

// Additional deeper terrain layers - appear gradually
function DeeperTerrainLayers({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const layer1Ref = useRef<THREE.Mesh>(null);
  const layer2Ref = useRef<THREE.Mesh>(null);

  const geometry1 = useMemo(() => {
    const geom = new THREE.PlaneGeometry(300, 300, 120, 120);
    const positions = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] = Math.sin(distance * 0.08) * 3 + Math.sin(x * 0.04) * 2;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }, []);

  const geometry2 = useMemo(() => {
    const geom = new THREE.PlaneGeometry(400, 400, 140, 140);
    const positions = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] = Math.sin(distance * 0.06) * 4 + Math.sin(x * 0.03) * 2.5;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state) => {
    if (!layer1Ref.current || !layer2Ref.current) return;
    const time = state.clock.getElapsedTime();

    // Fade in layers gradually
    const layer1Opacity = Math.max(0, (scrollProgress - 0.1) * 2);
    const layer2Opacity = Math.max(0, (scrollProgress - 0.3) * 1.5);

    if (layer1Opacity > 0) {
      const positions1 = geometry1.attributes.position.array as Float32Array;
      for (let i = 0; i < positions1.length; i += 3) {
        const x = positions1[i];
        const y = positions1[i + 1];
        const distance = Math.sqrt(x * x + y * y);
        positions1[i + 2] =
          Math.sin(distance * 0.08 + time * 0.3) * 3 +
          Math.sin(x * 0.04 + time * 0.25) * 2;
      }
      geometry1.attributes.position.needsUpdate = true;
      geometry1.computeVertexNormals();
      layer1Ref.current.position.y = -50 - scrollProgress * 25;
    }

    if (layer2Opacity > 0) {
      const positions2 = geometry2.attributes.position.array as Float32Array;
      for (let i = 0; i < positions2.length; i += 3) {
        const x = positions2[i];
        const y = positions2[i + 1];
        const distance = Math.sqrt(x * x + y * y);
        positions2[i + 2] =
          Math.sin(distance * 0.06 + time * 0.25) * 4 +
          Math.sin(x * 0.03 + time * 0.2) * 2.5;
      }
      geometry2.attributes.position.needsUpdate = true;
      geometry2.computeVertexNormals();
      layer2Ref.current.position.y = -70 - scrollProgress * 30;
    }
  });

  const layer1Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.1) * 2));
  const layer2Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 1.5));

  return (
    <>
      {layer1Opacity > 0 && (
        <mesh ref={layer1Ref} geometry={geometry1} rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
          <meshStandardMaterial
            color="#0a0e1a"
            emissive="#1a2332"
            emissiveIntensity={0.12}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.2 * layer1Opacity}
            wireframe
          />
        </mesh>
      )}
      {layer2Opacity > 0 && (
        <mesh ref={layer2Ref} geometry={geometry2} rotation={[-Math.PI / 2, 0, 0]} position={[0, -70, 0]}>
          <meshStandardMaterial
            color="#0a0e1a"
            emissive="#1a2332"
            emissiveIntensity={0.1}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.15 * layer2Opacity}
            wireframe
          />
        </mesh>
      )}
    </>
  );
}

// Central energy stream component - EXACTLY like hero, evolves gradually
function EnergyStream({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      index: i,
      phase: (i / 30) * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.15;

    // Gradually expand the energy stream radius
    const baseRadius = 12 + scrollProgress * 5;

    particles.forEach((particle, i) => {
      const child = groupRef.current!.children[i] as THREE.Mesh;
      if (child) {
        const waveOffset = Math.sin(time * 0.5 + particle.phase) * 3;
        const radius = baseRadius + waveOffset;
        const angle = particle.phase + time * 0.2;
        child.position.x = Math.sin(angle) * radius;
        child.position.z = Math.cos(angle) * radius;
        child.position.y = (i - 15) * 1.5 + Math.sin(time * 0.3 + particle.phase) * 2 - scrollProgress * 10;

        // Scale based on position in wave
        const scale = 0.4 + Math.abs(Math.sin(time * 0.5 + particle.phase)) * 0.3;
        child.scale.setScalar(scale);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(particle.phase) * 12,
            (i - 15) * 1.5,
            Math.cos(particle.phase) * 12,
          ]}
        >
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={1.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Subtle holographic grid overlay - appears gradually, very subtle
function SubtleHolographicGrid({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const gridRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(500, 500, 50, 50);
    return geom;
  }, []);

  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    gridRef.current.rotation.z = time * 0.01 + scrollProgress * 0.1;
    gridRef.current.position.y = -scrollProgress * 40;
  });

  const opacity = Math.max(0, Math.min(0.08, (scrollProgress - 0.2) * 0.4));

  if (opacity <= 0) return null;

  return (
    <mesh ref={gridRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -20]}>
      <meshStandardMaterial
        color="#4F7DF3"
        emissive="#4F7DF3"
        emissiveIntensity={0.2}
        transparent
        opacity={opacity}
        wireframe={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// 3D Scene Component - maintains hero section style throughout
function Scene3D({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4F7DF3" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22D3EE" />
      <directionalLight position={[0, 10, 5]} intensity={0.3} color="#ffffff" />

      {/* Core elements - always present, exactly like hero */}
      <FloatingParticles count={150} scrollProgress={scrollProgress} />
      <DigitalTerrain scrollProgress={scrollProgress} />
      <EnergyStream scrollProgress={scrollProgress} />

      {/* Additional layers - fade in gradually */}
      <DeeperTerrainLayers scrollProgress={scrollProgress} />
      <SubtleHolographicGrid scrollProgress={scrollProgress} />
    </>
  );
}

export function ContinuousFuturisticBackground() {
  const scrollProgress = useScrollProgress();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade in after hero section starts scrolling
      const hero = document.querySelector("section:first-of-type") as HTMLElement;
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight : windowHeight;

      const fadeStart = heroEnd - windowHeight * 0.2;
      const fadeEnd = heroEnd + windowHeight * 0.1;

      let newOpacity = 0;
      if (scrollY >= fadeStart) {
        if (scrollY < fadeEnd) {
          newOpacity = Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart));
        } else {
          newOpacity = 1;
        }
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate smooth gradient stops based on scroll
  const gradientStop1 = Math.min(30, 10 + scrollProgress * 20);
  const gradientStop2 = Math.min(60, 40 + scrollProgress * 20);

  // Volumetric glow positions - move subtly with scroll
  const glow1Top = 10 + scrollProgress * 5;
  const glow1Left = 25 + scrollProgress * 2;
  const glow2Bottom = 20 - scrollProgress * 3;
  const glow2Right = 25 + scrollProgress * 2;
  const glow3Top = 50 + scrollProgress * 3;

  return (
    <div
      className="fixed inset-0 w-full bg-black transition-opacity duration-1000 ease-out"
      style={{
        zIndex: -1,
        pointerEvents: "none",
        height: "100vh",
        top: 0,
        left: 0,
        opacity: opacity,
      }}
    >
      {/* Base gradient background - EXACTLY like hero, evolves smoothly */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `linear-gradient(to bottom, 
            #0a0e1a 0%, 
            #0f1419 ${gradientStop1}%, 
            #0f1419 ${gradientStop2}%, 
            #050810 100%
          )`,
        }}
      />

      {/* Charcoal gradient layers - EXACTLY like hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/40 via-transparent to-[#0f1419]/60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/50 via-transparent to-[#1a2332]/30" />

      {/* Volumetric glow effects - EXACTLY like hero, move subtly */}
      <div className="absolute inset-0">
        <div
          className="absolute w-[800px] h-[800px] bg-[#4F7DF3]/10 rounded-full blur-[120px] transition-all duration-1000 ease-out"
          style={{
            top: `${glow1Top}%`,
            left: `${glow1Left}%`,
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-[#22D3EE]/10 rounded-full blur-[100px] transition-all duration-1000 ease-out"
          style={{
            bottom: `${glow2Bottom}%`,
            right: `${glow2Right}%`,
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute w-[1000px] h-[1000px] bg-[#4F7DF3]/5 rounded-full blur-[150px] transition-all duration-1000 ease-out"
          style={{
            top: `${glow3Top}%`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* 3D Canvas - EXACTLY like hero section */}
      <div className="absolute inset-0 opacity-60">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D scrollProgress={scrollProgress} />
        </Canvas>
      </div>

      {/* CSS Particle Layer - EXACTLY like hero, evolves smoothly */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => {
          // Gradually increase particle count and spread
          const baseTop = Math.random() * 100;
          const scrollOffset = scrollProgress * 50;
          const particleSize = 1 + Math.random() * 3 + scrollProgress * 0.5;

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${particleSize}px`,
                height: `${particleSize}px`,
                left: `${Math.random() * 100}%`,
                top: `${(baseTop + scrollOffset) % 200}%`,
                background: `radial-gradient(circle, rgba(79, 125, 243, ${0.4 + Math.random() * 0.4}) 0%, transparent 70%)`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(79, 125, 243, 0.5)`,
                animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(${-scrollProgress * 20}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Micro light specs - EXACTLY like hero */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => {
          const baseTop = Math.random() * 100;
          const scrollOffset = scrollProgress * 30;

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '1px',
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${(baseTop + scrollOffset) % 200}%`,
                background: '#22D3EE',
                boxShadow: `0 0 3px rgba(34, 211, 238, 0.8)`,
                animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${-scrollProgress * 15}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Central energy stream glow (CSS) - EXACTLY like hero, evolves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[1px] bg-gradient-to-b from-transparent via-[#22D3EE]/60 to-transparent blur-[1px] opacity-50 transition-all duration-1000"
          style={{
            height: `${500 + scrollProgress * 200}px`,
            animation: 'pulse 3s ease-in-out infinite',
            transform: `translateY(${-scrollProgress * 30}px)`,
          }}
        />
        <div
          className="absolute w-[3px] bg-gradient-to-b from-transparent via-[#4F7DF3]/40 to-transparent blur-sm opacity-30 transition-all duration-1000"
          style={{
            height: `${400 + scrollProgress * 150}px`,
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '0.5s',
            transform: `translateY(${-scrollProgress * 25}px)`,
          }}
        />
      </div>

      {/* Reflection layers - EXACTLY like hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Bloom effect overlay - EXACTLY like hero */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4F7DF3]/5 via-transparent to-transparent" />

      {/* Negative space mask for center - EXACTLY like hero, evolves subtly */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse ${900 + scrollProgress * 200}px ${700 + scrollProgress * 150}px at center, transparent 0%, rgba(0, 0, 0, ${0.3 - scrollProgress * 0.1}) 50%)`,
        }}
      />

      {/* Additional depth layers - EXACTLY like hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a]/30" />

      {/* Cinematic vignette - EXACTLY like hero, evolves subtly */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse ${1200 + scrollProgress * 300}px ${900 + scrollProgress * 200}px at center, transparent 60%, rgba(0, 0, 0, ${0.4 + scrollProgress * 0.1}) 100%)`,
        }}
      />

      {/* Subtle holographic grid overlay - appears very gradually */}
      {scrollProgress > 0.2 && (
        <div
          className="absolute inset-0 transition-opacity duration-2000 ease-out"
          style={{
            opacity: Math.min(0.15, (scrollProgress - 0.2) * 0.75),
            backgroundImage: `
              linear-gradient(rgba(79, 125, 243, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 125, 243, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: `${50 + scrollProgress * 20}px ${50 + scrollProgress * 20}px`,
            transform: `translateY(${-scrollProgress * 10}px)`,
          }}
        />
      )}
    </div>
  );
}
