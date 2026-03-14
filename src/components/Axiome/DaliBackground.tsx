import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { meltingVertexShader, meltingFragmentShader } from '../../shaders/meltingShader';

export default function DaliBackground() {
  const materialsRef = useRef<THREE.ShaderMaterial[]>([]);

  // Generate 15 random abstract geometries
  const drops = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 10 - 2,
        (Math.random() - 0.5) * 20 - 10
      ] as [number, number, number],
      scale: Math.random() * 2 + 1,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      color1: new THREE.Color('#20498B'), // Pageant Blue
      color2: new THREE.Color('#FEEA6D'), // Yarrow
    }));
  }, []);

  useFrame(({ clock }) => {
    materialsRef.current.forEach(mat => {
      if (mat) mat.uniforms.uTime.value = clock.getElapsedTime();
    });
  });

  return (
    <group position={[0, 0, -10]}>
      {drops.map((drop, i) => (
        <mesh 
          key={i} 
          position={drop.position} 
          scale={drop.scale} 
          rotation={drop.rotation}
        >
          {/* using distorted icosahedrons for weird abstract shapes */}
          <icosahedronGeometry args={[1, 4]} />
          <shaderMaterial
            ref={(el) => { if (el) materialsRef.current[i] = el; }}
            vertexShader={meltingVertexShader}
            fragmentShader={meltingFragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColor1: { value: drop.color1 },
              uColor2: { value: drop.color2 }
            }}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}
