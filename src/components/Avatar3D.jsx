import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Neon material helper
function neonMaterial(color, intensity = 2) {
  return new THREE.MeshStandardMaterial({
    color: color,
    emissive: new THREE.Color(color),
    emissiveIntensity: intensity,
    roughness: 0.3,
    metalness: 0.8,
  });
}

// The humanoid avatar built from Three.js primitives
function AvatarMesh() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle idle sway
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  const cyanMat = neonMaterial('#00ffff', 1.5);
  const magentaMat = neonMaterial('#ff00ff', 1.5);
  const darkMat = new THREE.MeshStandardMaterial({
    color: '#0a0a2a',
    roughness: 0.5,
    metalness: 0.9,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: '#c8956c',
    roughness: 0.8,
    metalness: 0.1,
  });
  const eyeMat = neonMaterial('#00ffff', 3);
  const shirtMat = new THREE.MeshStandardMaterial({
    color: '#0d0d2d',
    roughness: 0.6,
    metalness: 0.3,
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 2.1, 0]} material={skinMat} castShadow>
        <sphereGeometry args={[0.42, 32, 32]} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 2.42, 0]} material={darkMat} castShadow>
        <sphereGeometry args={[0.43, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
      </mesh>

      {/* Left eye */}
      <mesh position={[-0.14, 2.14, 0.35]} material={eyeMat}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.14, 2.14, 0.35]} material={eyeMat}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>

      {/* Neon glasses frame left */}
      <mesh position={[-0.14, 2.14, 0.38]} material={cyanMat}>
        <torusGeometry args={[0.1, 0.012, 12, 32]} />
      </mesh>

      {/* Neon glasses frame right */}
      <mesh position={[0.14, 2.14, 0.38]} material={cyanMat}>
        <torusGeometry args={[0.1, 0.012, 12, 32]} />
      </mesh>

      {/* Glasses bridge */}
      <mesh position={[0, 2.14, 0.38]} rotation={[0, 0, Math.PI / 2]} material={cyanMat}>
        <cylinderGeometry args={[0.01, 0.01, 0.14, 8]} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.65, 0]} material={skinMat} castShadow>
        <cylinderGeometry args={[0.14, 0.16, 0.25, 16]} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.0, 0]} material={shirtMat} castShadow>
        <boxGeometry args={[0.85, 0.9, 0.5]} />
      </mesh>

      {/* Neon collar stripe */}
      <mesh position={[0, 1.43, 0.26]} material={cyanMat}>
        <boxGeometry args={[0.4, 0.04, 0.01]} />
      </mesh>

      {/* Neon chest stripe left */}
      <mesh position={[-0.2, 1.05, 0.26]} material={magentaMat}>
        <boxGeometry args={[0.04, 0.5, 0.01]} />
      </mesh>

      {/* Neon chest stripe right */}
      <mesh position={[0.2, 1.05, 0.26]} material={cyanMat}>
        <boxGeometry args={[0.04, 0.5, 0.01]} />
      </mesh>

      {/* Left upper arm */}
      <mesh position={[-0.62, 1.1, 0]} rotation={[0, 0, 0.3]} material={shirtMat} castShadow>
        <cylinderGeometry args={[0.15, 0.13, 0.5, 16]} />
      </mesh>

      {/* Right upper arm */}
      <mesh position={[0.62, 1.1, 0]} rotation={[0, 0, -0.3]} material={shirtMat} castShadow>
        <cylinderGeometry args={[0.15, 0.13, 0.5, 16]} />
      </mesh>

      {/* Left forearm */}
      <mesh position={[-0.72, 0.72, 0]} rotation={[0, 0, 0.1]} material={skinMat} castShadow>
        <cylinderGeometry args={[0.11, 0.1, 0.45, 16]} />
      </mesh>

      {/* Right forearm */}
      <mesh position={[0.72, 0.72, 0]} rotation={[0, 0, -0.1]} material={skinMat} castShadow>
        <cylinderGeometry args={[0.11, 0.1, 0.45, 16]} />
      </mesh>

      {/* Left hand */}
      <mesh position={[-0.76, 0.48, 0]} material={skinMat} castShadow>
        <sphereGeometry args={[0.11, 16, 16]} />
      </mesh>

      {/* Right hand */}
      <mesh position={[0.76, 0.48, 0]} material={skinMat} castShadow>
        <sphereGeometry args={[0.11, 16, 16]} />
      </mesh>

      {/* Hips / belt */}
      <mesh position={[0, 0.52, 0]} material={darkMat} castShadow>
        <boxGeometry args={[0.88, 0.2, 0.52]} />
      </mesh>

      {/* Belt neon strip */}
      <mesh position={[0, 0.52, 0.27]} material={magentaMat}>
        <boxGeometry args={[0.86, 0.05, 0.01]} />
      </mesh>

      {/* Left upper leg */}
      <mesh position={[-0.24, 0.1, 0]} material={darkMat} castShadow>
        <cylinderGeometry args={[0.18, 0.15, 0.7, 16]} />
      </mesh>

      {/* Right upper leg */}
      <mesh position={[0.24, 0.1, 0]} material={darkMat} castShadow>
        <cylinderGeometry args={[0.18, 0.15, 0.7, 16]} />
      </mesh>

      {/* Left lower leg */}
      <mesh position={[-0.24, -0.5, 0]} material={darkMat} castShadow>
        <cylinderGeometry args={[0.13, 0.12, 0.55, 16]} />
      </mesh>

      {/* Right lower leg */}
      <mesh position={[0.24, -0.5, 0]} material={darkMat} castShadow>
        <cylinderGeometry args={[0.13, 0.12, 0.55, 16]} />
      </mesh>

      {/* Left shoe */}
      <mesh position={[-0.24, -0.82, 0.1]} material={cyanMat} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.4]} />
      </mesh>

      {/* Right shoe */}
      <mesh position={[0.24, -0.82, 0.1]} material={cyanMat} castShadow>
        <boxGeometry args={[0.22, 0.14, 0.4]} />
      </mesh>

      {/* Neon wristband left */}
      <mesh position={[-0.76, 0.62, 0]} rotation={[0, 0, 0.1]} material={magentaMat}>
        <torusGeometry args={[0.12, 0.025, 8, 20]} />
      </mesh>

      {/* Neon wristband right */}
      <mesh position={[0.76, 0.62, 0]} rotation={[0, 0, -0.1]} material={cyanMat}>
        <torusGeometry args={[0.12, 0.025, 8, 20]} />
      </mesh>

      {/* Shadow / platform */}
      <mesh position={[0, -1.0, 0]} material={new THREE.MeshStandardMaterial({ color: '#00ffff', transparent: true, opacity: 0.15, emissive: '#00ffff', emissiveIntensity: 0.5 })}>
        <cylinderGeometry args={[0.9, 0.9, 0.04, 40]} />
      </mesh>
    </group>
  );
}

export default function Avatar3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0.8, 4], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[-3, 3, 3]} intensity={1.5} color="#00ffff" />
        <pointLight position={[3, 2, 3]} intensity={1.5} color="#ff00ff" />
        <pointLight position={[0, -2, 2]} intensity={0.8} color="#7700ff" />
        <directionalLight
          position={[0, 5, 5]}
          intensity={0.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Sparkles for neon ambiance */}
        <Sparkles
          count={60}
          scale={[4, 4, 4]}
          size={2}
          speed={0.4}
          color="#00ffff"
          opacity={0.7}
        />
        <Sparkles
          count={30}
          scale={[4, 4, 4]}
          size={3}
          speed={0.3}
          color="#ff00ff"
          opacity={0.5}
        />

        {/* Floating animation wrapper */}
        <Float
          speed={2}
          rotationIntensity={0.1}
          floatIntensity={0.4}
        >
          <AvatarMesh />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
