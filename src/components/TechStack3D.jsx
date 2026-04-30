'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';

function SkillCloud() {
  const groupRef = useRef();
  
  const skills = [
    { name: "React", pos: [-2, 1, 0], color: "#61dafb" },
    { name: "Next.js", pos: [2, 1.5, -1], color: "#ffffff" },
    { name: "Three.js", pos: [0, -1, 1.5], color: "#ffffff" },
    { name: "Node.js", pos: [-1.5, -1.5, -0.5], color: "#339933" },
    { name: "TypeScript", pos: [1.5, -0.5, 1], color: "#3178c6" },
    { name: "MongoDB", pos: [0, 2, 0.5], color: "#47a248" },
    { name: "PostgreSQL", pos: [-1, 0, -2], color: "#336791" },
    { name: "Framer Motion", pos: [1, 0, -1.5], color: "#f5f5f5" },
  ];

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={skill.pos}
            color={skill.color}
            fontSize={0.5}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'center'}
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {skill.name}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function TechStack3D() {
  return (
    <div style={{ height: '400px', width: '100%', cursor: 'grab' }} className="clickable">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SkillCloud />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
