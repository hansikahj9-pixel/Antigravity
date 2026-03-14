import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import { masterMeltVertexShader, masterMeltFragmentShader } from '../../shaders/masterMeltShader';

// Uses an open source massive, heavy architectural font geometry
const FONT_URL = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

export default function AxiomeText() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uFloorY: { value: -3.0 }, // Floor level where the text pools
    uColor: { value: new THREE.Color('#FEEA6D') } // Vibrant Yarrow yellow
  }), []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <Center position={[0, 2, 2]}>
      {/* Heavy 3D Text */}
      <Text3D 
        font={FONT_URL}
        size={3.5}
        height={1.5}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={8}
      >
        AXIOME
        <shaderMaterial 
          ref={materialRef}
          vertexShader={masterMeltVertexShader}
          fragmentShader={masterMeltFragmentShader}
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
      </Text3D>
    </Center>
  );
}
