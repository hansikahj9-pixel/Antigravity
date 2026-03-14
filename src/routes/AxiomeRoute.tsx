import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';
import MeditatingStructures from '../components/Axiome/MeditatingStructures';
import DaliBackground from '../components/Axiome/DaliBackground';
import AxiomeText from '../components/Axiome/AxiomeText';

export default function AxiomeRoute() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, #20498B, #F07830)' }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Colorful stage lighting */}
        <ambientLight intensity={0.4} color="#FEEA6D" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#F07830" />
        <directionalLight position={[-10, 5, 5]} intensity={1.2} color="#20498B" />
        <pointLight position={[0, -5, 5]} intensity={2} color="#E92F2F" />

        {/* Surreal Elements */}
        <DaliBackground />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
          <MeditatingStructures />
        </Float>

        <AxiomeText />

        {/* Post-processing or Environment */}
        <Environment preset="apartment" blur={0.8} />
        <OrbitControls makeDefault enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
      </Canvas>
    </div>
  );
}
