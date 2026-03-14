import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MeditatingStructures() {
  const groupRef = useRef<THREE.Group>(null);

  // Common glass/silk physical materials
  const hauteRedSilk = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#E92F2F',
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.8, // glass-like
    ior: 1.5,
    thickness: 2.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    side: THREE.DoubleSide
  }), []);

  const sycamoreSilk = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#4C5E3D',
    metalness: 0.2,
    roughness: 0.1,
    transmission: 0.9,
    ior: 1.4,
    thickness: 1.5,
    clearcoat: 0.8,
    side: THREE.DoubleSide
  }), []);

  // Slowly rotate the whole structure cluster
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, -5]}>
      {/* Central Sphere */}
      <mesh material={hauteRedSilk} position={[0, 2, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      {/* Sycamore Torus Arch */}
      <mesh material={sycamoreSilk} position={[0, 2, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.5, 0.4, 32, 100]} />
      </mesh>
      
      <mesh material={sycamoreSilk} position={[0, 2, 0]} rotation={[-Math.PI / 4, Math.PI / 2, 0]}>
        <torusGeometry args={[4.5, 0.2, 32, 100]} />
      </mesh>

      {/* Floating abstract pillars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh 
          key={i} 
          material={i % 2 === 0 ? hauteRedSilk : sycamoreSilk}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 5,
            Math.sin(i) * 2 + 1,
            Math.sin((i / 5) * Math.PI * 2) * 5
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <cylinderGeometry args={[0.3, 0.3, 4, 32]} />
        </mesh>
      ))}
    </group>
  );
}
