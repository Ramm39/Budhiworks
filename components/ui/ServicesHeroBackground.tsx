"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

// Hexagonal particles component - different from hero's spheres
function HexagonalParticles({ count = 200 }: { count?: number }) {
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

      // Different movement pattern - more geometric/orbital
      const nx = x + Math.cos(t * 0.8) * factor;
      const ny = y + Math.sin(t * 1.5) * factor;
      const nz = z + Math.cos(t * 1.2) * factor;

      const matrix = new THREE.Matrix4();
      matrix.setPosition(nx, ny, nz);
      // Rotate hexagons
      matrix.makeRotationZ(time * 0.1 + i * 0.1);
      matrix.scale(new THREE.Vector3(0.4, 0.4, 0.2));

      meshRef.current!.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const hexGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 0.3;
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      points.push(new THREE.Vector2(x, y));
    }
    shape.setFromPoints(points);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.1,
      bevelEnabled: false,
    });
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[hexGeometry, undefined, count]}>
      <meshStandardMaterial
        color="#22D3EE"
        emissive="#22D3EE"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}

// Geometric grid terrain - different pattern from hero
function GeometricGridTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(200, 200, 80, 80);
    const positions = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      // More angular, geometric pattern
      positions[i + 2] = Math.sin(distance * 0.12) * 2.5 + Math.sin(x * 0.08) * 2;
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
      // More geometric wave pattern
      positions[i + 2] =
        Math.sin(distance * 0.12 + time * 0.4) * 2.5 +
        Math.sin(x * 0.08 + time * 0.3) * 2 +
        Math.sin(y * 0.08 + time * 0.35) * 1.5;
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
          emissiveIntensity={0.18}
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      {/* Cyan overlay with different pattern */}
      <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, Math.PI / 6]} position={[0, -29.5, 0]}>
        <meshStandardMaterial
          color="#4F7DF3"
          emissive="#4F7DF3"
          emissiveIntensity={0.35}
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>
    </>
  );
}

// Orbital rings component - different from hero's energy stream
function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);
  const rings = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      radius: 8 + i * 4,
      speed: 0.1 + i * 0.05,
      phase: (i / 3) * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    rings.forEach((ring, i) => {
      const child = groupRef.current!.children[i] as THREE.Mesh;
      if (child) {
        child.rotation.y = time * ring.speed;
        child.rotation.x = Math.sin(time * 0.2 + ring.phase) * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[ring.radius, 0.1, 16, 64]} />
          <meshStandardMaterial
            color={i === 0 ? "#22D3EE" : i === 1 ? "#4F7DF3" : "#22D3EE"}
            emissive={i === 0 ? "#22D3EE" : i === 1 ? "#4F7DF3" : "#22D3EE"}
            emissiveIntensity={1.0}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating geometric shapes
function FloatingGeometricShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      type: i % 3 === 0 ? 'box' : i % 3 === 1 ? 'octahedron' : 'tetrahedron',
      position: [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      speed: 0.02 + Math.random() * 0.03,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    shapes.forEach((shape, i) => {
      const child = groupRef.current!.children[i] as THREE.Mesh;
      if (child) {
        child.rotation.x += shape.speed;
        child.rotation.y += shape.speed * 0.7;
        child.position.y += Math.sin(time * 0.5 + i) * 0.1;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => {
        let geometry;
        if (shape.type === 'box') {
          geometry = <boxGeometry args={[1, 1, 1]} />;
        } else if (shape.type === 'octahedron') {
          geometry = <octahedronGeometry args={[0.8]} />;
        } else {
          geometry = <tetrahedronGeometry args={[0.7]} />;
        }

        return (
          <mesh
            key={i}
            position={shape.position as [number, number, number]}
            rotation={shape.rotation as [number, number, number]}
          >
            {geometry}
            <meshStandardMaterial
              color={i % 2 === 0 ? "#4F7DF3" : "#22D3EE"}
              emissive={i % 2 === 0 ? "#4F7DF3" : "#22D3EE"}
              emissiveIntensity={0.8}
              transparent
              opacity={0.5}
              wireframe
            />
          </mesh>
        );
      })}
    </group>
  );
}

// 3D Scene Component
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#4F7DF3" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#22D3EE" />
      <directionalLight position={[0, 10, 5]} intensity={0.35} color="#ffffff" />

      <HexagonalParticles count={180} />
      <GeometricGridTerrain />
      <OrbitalRings />
      <FloatingGeometricShapes />
    </>
  );
}

export function ServicesHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background - slightly different tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#050810]" />

      {/* Different gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/50 via-transparent to-[#0f1419]/70" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/60 via-transparent to-[#1a2332]/40" />

      {/* Volumetric glow effects - different positions */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[900px] h-[900px] bg-[#22D3EE]/12 rounded-full blur-[130px]" style={{ animation: 'pulse 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-[#4F7DF3]/12 rounded-full blur-[110px]" style={{ animation: 'pulse 10s ease-in-out infinite', animationDelay: '1.2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-[#22D3EE]/6 rounded-full blur-[160px]" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-65">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* CSS Hexagonal Particle Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(34, 211, 238, ${0.5 + Math.random() * 0.4}) 0%, transparent 70%)`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              boxShadow: `0 0 ${Math.random() * 12 + 6}px rgba(34, 211, 238, 0.6)`,
              animation: `float ${18 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Geometric light specs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#22D3EE' : '#4F7DF3',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              boxShadow: `0 0 4px rgba(34, 211, 238, 0.9)`,
              animation: `sparkle ${2.5 + Math.random() * 3.5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2.5}s`,
            }}
          />
        ))}
      </div>

      {/* Central orbital glow (CSS) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full border border-[#22D3EE]/30 opacity-40"
          style={{
            animation: 'pulse 6s ease-in-out infinite',
            boxShadow: '0 0 100px rgba(34, 211, 238, 0.3)',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-[#4F7DF3]/25 opacity-30"
          style={{
            animation: 'pulse 8s ease-in-out infinite',
            animationDelay: '0.7s',
            boxShadow: '0 0 80px rgba(79, 125, 243, 0.25)',
          }}
        />
      </div>

      {/* Geometric grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotate(45deg)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Reflection layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent" />

      {/* Bloom effect overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#22D3EE]/6 via-transparent to-transparent" />

      {/* Negative space mask */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1000px 800px at center, transparent 0%, rgba(0, 0, 0, 0.35) 50%)',
        }}
      />

      {/* Additional depth layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a]/35" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1300px 1000px at center, transparent 60%, rgba(0, 0, 0, 0.45) 100%)',
        }}
      />
    </div>
  );
}
