'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AlchemyCore() {
  const { mouse, viewport } = useThree();
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Parallax effect
    const targetX = (mouse.x * viewport.width) / 8;
    const targetY = (mouse.y * viewport.height) / 8;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  const isMobile = viewport.width < 6;
  const coreScale = isMobile ? 1.2 : 1.8;
  const coreX = isMobile ? 0 : viewport.width / 4;
  const coreY = isMobile ? -2 : 0;

  return (
    <group ref={groupRef}>
      {/* The Alchemist's Core */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[coreX, coreY, 0]} scale={coreScale}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#3b82f6" 
            speed={3} 
            distort={0.4} 
            radius={1}
            metalness={0.9}
            roughness={0.1}
            emissive="#1e40af"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Orbiting Rings */}
      <Float speed={5} rotationIntensity={2}>
        <mesh position={[coreX, coreY, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[coreScale * 1.2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
        </mesh>
      </Float>

      <Float speed={4} rotationIntensity={3}>
        <mesh position={[coreX, coreY, 0]} rotation={[Math.PI / -4, Math.PI / 4, 0]}>
          <torusGeometry args={[coreScale * 1.4, 0.01, 16, 100]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        <ParticleField />
        <AlchemyCore />
      </Canvas>
    </div>
  );
}
