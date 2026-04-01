"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function AnimatedSphere() {
  return (
    <Sphere args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#3b82f6"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }} style={{ height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Suspense fallback={null}>
        <AnimatedSphere />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
