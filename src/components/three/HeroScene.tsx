"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function Particles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const orange = new THREE.Color("#FF6B35");
    const cyan = new THREE.Color("#00D4FF");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const t = Math.random();
      const c = orange.clone().lerp(cyan, t);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingSphere({
  position,
  color,
  speed,
  distort,
  scale,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });

  return (
    <Sphere ref={ref} args={[1, 48, 48]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1.5}
        roughness={0.1}
        metalness={0.3}
        transparent
        opacity={0.55}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} color="#FF6B35" intensity={1.5} />
      <pointLight position={[5, 5, 5]} color="#00D4FF" intensity={1.5} />

      <Particles count={140} />

      <FloatingSphere
        position={[-3.5, 1, -3]}
        color="#FF6B35"
        speed={0.7}
        distort={0.45}
        scale={1.2}
      />
      <FloatingSphere
        position={[3.5, -1, -4]}
        color="#00D4FF"
        speed={0.5}
        distort={0.35}
        scale={0.9}
      />
      <FloatingSphere
        position={[0, -2.5, -5]}
        color="#1a2850"
        speed={0.9}
        distort={0.5}
        scale={1.5}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
