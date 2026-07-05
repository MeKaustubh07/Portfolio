'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DriftingGrid() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const cols = 40;
    const rows = 24;
    const pts = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        pts[i++] = (x - cols / 2) * 0.55;
        pts[i++] = (y - rows / 2) * 0.55;
        pts[i++] = 0;
      }
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 0.5 + t * 0.6) * Math.cos(y * 0.5 + t * 0.4) * 0.6);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref} rotation={[-0.9, 0, 0]} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c9a05c" size={0.04} transparent opacity={0.35} depthWrite={false} />
    </points>
  );
}

export default function SectionBackdrop() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <DriftingGrid />
    </Canvas>
  );
}
