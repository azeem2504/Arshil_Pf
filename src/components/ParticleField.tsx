import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orbRef1 = useRef<THREE.Mesh>(null);
  const orbRef2 = useRef<THREE.Mesh>(null);
  const orbRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (orbRef1.current) {
      orbRef1.current.position.x = Math.sin(t * 0.3) * 3;
      orbRef1.current.position.y = Math.cos(t * 0.4) * 2;
      orbRef1.current.position.z = Math.sin(t * 0.2) * 2 - 5;
    }
    if (orbRef2.current) {
      orbRef2.current.position.x = Math.cos(t * 0.4) * 4;
      orbRef2.current.position.y = Math.sin(t * 0.3) * 3;
      orbRef2.current.position.z = Math.cos(t * 0.25) * 2 - 5;
    }
    if (orbRef3.current) {
      orbRef3.current.position.x = Math.sin(t * 0.25) * 5;
      orbRef3.current.position.y = Math.cos(t * 0.35) * 2.5;
      orbRef3.current.position.z = Math.sin(t * 0.3) * 3 - 5;
    }
  });

  return (
    <>
      <mesh ref={orbRef1}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.15} />
      </mesh>
      <mesh ref={orbRef2}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orbRef3}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.12} />
      </mesh>
    </>
  );
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ParticleField;
