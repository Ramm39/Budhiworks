"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

// Floating particles component - optimized with reduced count
function FloatingParticles({ count = 120 }: { count?: number }) {
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

  // Cache matrix and vector to avoid allocations
  const matrix = useMemo(() => new THREE.Matrix4(), []);
  const scaleVector = useMemo(() => new THREE.Vector3(0.3, 0.3, 0.3), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);

      const nx = x + Math.cos(t) * factor;
      const ny = y + Math.sin(t * 2) * factor;
      const nz = z + Math.cos(t * 1.5) * factor;

      matrix.setPosition(nx, ny, nz);
      matrix.scale(scaleVector);

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

// Digital terrain/waves component - optimized geometry resolution
function DigitalTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    // Reduced segments for better performance (100x100 -> 60x60)
    const geom = new THREE.PlaneGeometry(200, 200, 60, 60);
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
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] =
        Math.sin(distance * 0.1 + time * 0.5) * 2 +
        Math.sin(x * 0.05 + time * 0.3) * 1.5 +
        Math.sin(y * 0.05 + time * 0.4) * 1;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
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
      {/* Holographic overlay layer */}
      <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -29.5, 0]}>
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.3}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </>
  );
}

// Central energy stream component - flowing particle wave
function EnergyStream() {
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

    // Animate particles in a flowing wave pattern
    particles.forEach((particle, i) => {
      const child = groupRef.current!.children[i] as THREE.Mesh;
      if (child) {
        const waveOffset = Math.sin(time * 0.5 + particle.phase) * 3;
        const radius = 12 + waveOffset;
        const angle = particle.phase + time * 0.2;
        child.position.x = Math.sin(angle) * radius;
        child.position.z = Math.cos(angle) * radius;
        child.position.y = (i - 15) * 1.5 + Math.sin(time * 0.3 + particle.phase) * 2;

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

// 3D Scene Component
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4F7DF3" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22D3EE" />
      <directionalLight position={[0, 10, 5]} intensity={0.3} color="#ffffff" />

      <FloatingParticles count={100} />
      <DigitalTerrain />
      <EnergyStream />
    </>
  );
}

export function FuturisticHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#050810]" />

      {/* Charcoal gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/40 via-transparent to-[#0f1419]/60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/50 via-transparent to-[#1a2332]/30" />

      {/* Volumetric glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#4F7DF3]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#22D3EE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4F7DF3]/5 rounded-full blur-[150px]" />
      </div>

      {/* 3D Canvas - optimized performance */}
      <div className="absolute inset-0 opacity-60">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          gl={{ 
            alpha: true, 
            antialias: false, // Disable antialiasing for better performance
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          dpr={[1, 2]} // Limit pixel ratio for better performance
          performance={{ min: 0.5 }} // Reduce quality when FPS drops
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* CSS Particle Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(79, 125, 243, ${0.4 + Math.random() * 0.4}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(79, 125, 243, 0.5)`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Micro light specs - reduced count */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '1px',
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: '#22D3EE',
              boxShadow: `0 0 3px rgba(34, 211, 238, 0.8)`,
              animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Central energy stream glow (CSS) - multiple layers for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#22D3EE]/60 to-transparent blur-[1px] opacity-50"
          style={{
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[3px] h-[400px] bg-gradient-to-b from-transparent via-[#4F7DF3]/40 to-transparent blur-sm opacity-30"
          style={{
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '0.5s',
          }}
        />
      </div>

      {/* Reflection layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      {/* Bloom effect overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4F7DF3]/5 via-transparent to-transparent" />

      {/* Negative space mask for center - creates focus area */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 900px 700px at center, transparent 0%, rgba(0, 0, 0, 0.3) 50%)',
        }}
      />

      {/* Additional depth layers with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a]/30" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1200px 900px at center, transparent 60%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
}
