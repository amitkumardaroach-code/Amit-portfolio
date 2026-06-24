// HeroModel.jsx

import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";

function Knot() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh rotation={[0.5, 0.2, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 300, 32]} />
        <meshStandardMaterial color="#33d6ff" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function HeroModel() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Environment preset="city" />

      <Knot />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
