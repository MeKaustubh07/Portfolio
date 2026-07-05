'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SPACING = 0.62;

/**
 * An animated n-dimensional array: a lattice of instanced cells whose
 * scale and color follow a wave function sweeping through the tensor,
 * with a translucent "slice" plane scanning one axis — a visual nod to
 * BLAS routines and ndarray slicing.
 */
function TensorLattice({ grid }: { grid: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const slice = useRef<THREE.Mesh>(null);
  const count = grid * grid * grid;
  const half = (grid - 1) / 2;
  const extent = grid * SPACING;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const brass = useMemo(() => new THREE.Color('#c9a05c'), []);
  const sage = useMemo(() => new THREE.Color('#a8bd8f'), []);
  const frame = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(extent, extent, extent)),
    [extent]
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y += delta * 0.1;
      group.current.rotation.x = 0.4 + state.pointer.y * 0.12;
      group.current.rotation.y += state.pointer.x * delta * 0.25;
    }

    // slice plane sweeps along Y — an ndarray slice in motion
    if (slice.current) {
      slice.current.position.y = Math.sin(t * 0.45) * half * SPACING;
    }

    const m = mesh.current;
    if (!m) return;

    const sliceY = slice.current ? slice.current.position.y : 0;
    let i = 0;
    for (let x = 0; x < grid; x++) {
      for (let y = 0; y < grid; y++) {
        for (let z = 0; z < grid; z++) {
          const px = (x - half) * SPACING;
          const py = (y - half) * SPACING;
          const pz = (z - half) * SPACING;

          const wave =
            Math.sin(x * 0.85 + t * 1.3) *
            Math.cos(y * 0.85 + t * 1.05) *
            Math.sin(z * 0.85 + t * 0.85);
          const norm = wave * 0.5 + 0.5;

          // cells near the slice plane light up
          const sliceGlow = Math.max(0, 1 - Math.abs(py - sliceY) / (SPACING * 1.2));

          dummy.position.set(px, py, pz);
          dummy.scale.setScalar(0.14 + 0.11 * norm + 0.08 * sliceGlow);
          dummy.updateMatrix();
          m.setMatrixAt(i, dummy.matrix);

          tmpColor.lerpColors(brass, sage, norm).lerp(sage, sliceGlow * 0.6);
          m.setColorAt(i, tmpColor);
          i++;
        }
      }
    }
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]} key={count}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.3} metalness={0.55} />
      </instancedMesh>

      {/* slicing plane */}
      <mesh ref={slice} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[extent * 1.06, extent * 1.06]} />
        <meshBasicMaterial
          color="#a8bd8f"
          transparent
          opacity={0.07}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* bounding frame of the tensor */}
      <lineSegments geometry={frame}>
        <lineBasicMaterial color="#c9a05c" transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 7], fov: 50 }}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 8, 5]} intensity={1.3} color="#f5e6c8" />
        <pointLight position={[-6, -3, -4]} intensity={0.6} color="#a8bd8f" />
        <TensorLattice grid={isMobile ? 6 : 7} />
      </Suspense>
    </Canvas>
  );
}
