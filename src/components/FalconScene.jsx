import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { FalconSigil } from './FalconSigil';

function MovingLight() {
  const lightRef = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t) * 15;
      lightRef.current.position.z = Math.cos(t * .5) * 5;
      lightRef.current.position.y = Math.sin(t * .5) * 2 + 3;
    }
  });
  return <directionalLight ref={lightRef} intensity={3} />;
}

export function FalconScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: .4 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.3} />
        <MovingLight />
        <Suspense fallback={null}>
          <FalconSigil />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}