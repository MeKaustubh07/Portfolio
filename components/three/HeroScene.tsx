'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random points inside a sphere shell
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.008;
    // subtle parallax toward pointer
    const { x, y } = state.pointer;
    ref.current.rotation.y += x * delta * 0.05;
    ref.current.rotation.x += y * delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.15;
    mesh.current.rotation.z = t * 0.05;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.35, 64, 64]}>
        <MeshDistortMaterial
          color="#6d28d9"
          emissive="#4c1d95"
          emissiveIntensity={0.55}
          roughness={0.15}
          metalness={0.85}
          distort={0.42}
          speed={1.8}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: number }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={[tilt, 0.4, 0]}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.008, 8, 128]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 6]} intensity={1.4} color="#a78bfa" />
        <pointLight position={[-6, -4, -6]} intensity={0.8} color="#22d3ee" />
        <ParticleField count={isMobile ? 1100 : 2400} />
        <CoreOrb />
        <OrbitRing radius={2.2} speed={0.5} color="#22d3ee" tilt={1.15} />
        <OrbitRing radius={2.7} speed={-0.32} color="#f472b6" tilt={0.9} />
        <OrbitRing radius={3.2} speed={0.2} color="#a78bfa" tilt={1.35} />
      </Suspense>
    </Canvas>
  );
}
