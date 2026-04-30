'use client';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShapes() {
  const { mouse, viewport } = useThree();
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Parallax effect based on mouse movement
    const targetX = (mouse.x * viewport.width) / 10;
    const targetY = (mouse.y * viewport.height) / 10;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Primary Blob */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 1, -2]} scale={1.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#3b82f6" 
            envMapIntensity={0.8} 
            clearcoat={0.8} 
            clearcoatRoughness={0} 
            metalness={0.8}
            roughness={0.2}
            distort={0.4} 
            speed={2} 
          />
        </mesh>
      </Float>

      {/* Secondary Shape */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-3, -1, -3]} rotation={[0.5, 0.5, 0]} scale={0.8}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            metalness={0.6}
            roughness={0.2}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      {/* Tiny particles */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[-1, 2, -1]} scale={0.2}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#ec4899" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.8 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
        <AnimatedShapes />
      </Canvas>
    </div>
  );
}
