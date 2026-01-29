"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

// Floating particles component
function FloatingParticles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 15 + Math.random() * 80;
      const speed = 0.008 + Math.random() * 0.012;
      const x = Math.random() * 150 - 75;
      const y = Math.random() * 150 - 75;
      const z = Math.random() * 150 - 75;
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

      const nx = x + Math.cos(t) * factor;
      const ny = y + Math.sin(t * 2) * factor;
      const nz = z + Math.cos(t * 1.5) * factor;

      const matrix = new THREE.Matrix4();
      matrix.setPosition(nx, ny, nz);
      matrix.scale(new THREE.Vector3(0.25, 0.25, 0.25));

      meshRef.current!.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshStandardMaterial
        color="#4F7DF3"
        emissive="#4F7DF3"
        emissiveIntensity={0.4}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  );
}

// Abstract waves component
function AbstractWaves() {
  const meshRef = useRef<THREE.Mesh>(null);
  const overlayRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(180, 180, 80, 80);
    const positions = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] = Math.sin(distance * 0.12) * 1.5 + Math.sin(x * 0.06) * 1;
    }

    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !overlayRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      positions[i + 2] =
        Math.sin(distance * 0.12 + time * 0.4) * 1.5 +
        Math.sin(x * 0.06 + time * 0.25) * 1 +
        Math.sin(y * 0.06 + time * 0.3) * 0.8;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    meshRef.current.position.y = -25;
    overlayRef.current.position.y = -24.5;

    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.02;
    overlayRef.current.rotation.z = Math.sin(time * 0.1) * 0.02;
  });

  return (
    <>
      <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -25, 0]}>
        <meshStandardMaterial
          color="#0a0e1a"
          emissive="#1a2332"
          emissiveIntensity={0.12}
          metalness={0.85}
          roughness={0.15}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      <mesh ref={overlayRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -24.5, 0]}>
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.25}
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </>
  );
}

// Light rays component
function LightRays() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.z = time * 0.05;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.sin(angle) * 30,
              Math.cos(angle) * 30,
              -10,
            ]}
            rotation={[0, 0, angle]}
          >
            <planeGeometry args={[0.5, 40]} />
            <meshStandardMaterial
              color="#4F7DF3"
              emissive="#4F7DF3"
              emissiveIntensity={0.6}
              transparent
              opacity={0.15}
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
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} intensity={0.4} color="#4F7DF3" />
      <pointLight position={[-8, -8, -8]} intensity={0.25} color="#22D3EE" />
      <directionalLight position={[0, 8, 4]} intensity={0.25} color="#ffffff" />

      <FloatingParticles count={120} />
      <AbstractWaves />
      <LightRays />
    </>
  );
}

export function StartConversationVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#050810]" />

      {/* Atmospheric gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/30 via-transparent to-[#0f1419]/40" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/30 via-transparent to-[#1a2332]/20" />

      {/* Volumetric glow effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#4F7DF3]/8 rounded-full blur-[100px]"
          style={{
            top: "15%",
            left: "20%",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#22D3EE]/8 rounded-full blur-[90px]"
          style={{
            bottom: "25%",
            left: "10%",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-50">
        <Canvas
          camera={{ position: [0, 0, 45], fov: 70 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* CSS Particle Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(79, 125, 243, ${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(79, 125, 243, 0.4)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Micro light specs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "1px",
              height: "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "#22D3EE",
              boxShadow: `0 0 2px rgba(34, 211, 238, 0.7)`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Spotlight glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[400px] h-[400px] bg-gradient-radial from-[#4F7DF3]/15 via-[#22D3EE]/10 to-transparent rounded-full blur-[80px]"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content - Headline and Features */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
            style={{
              textShadow: "0 0 30px rgba(79, 125, 243, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)",
            }}
            animate={{
              textShadow: [
                "0 0 30px rgba(79, 125, 243, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)",
                "0 0 40px rgba(79, 125, 243, 0.7), 0 0 80px rgba(34, 211, 238, 0.5)",
                "0 0 30px rgba(79, 125, 243, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Let&apos;s Build Together
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300/80 mt-2 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transform your vision into reality
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mt-4">
          {[
            { icon: "🚀", title: "Fast Delivery", desc: "Quick turnaround times" },
            { icon: "✨", title: "Premium Quality", desc: "Excellence in every detail" },
            { icon: "🤝", title: "Dedicated Support", desc: "We're here for you" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#4F7DF3]/20 via-[#22D3EE]/20 to-[#4F7DF3]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6 md:mt-8"
        >
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF3] to-[#22D3EE] mb-1"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reflection layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent" />

      {/* Bloom effect overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4F7DF3]/4 via-transparent to-transparent" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 1000px 800px at center, transparent 50%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
    </div>
  );
}
