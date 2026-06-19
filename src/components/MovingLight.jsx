import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function MovingLight() {
  const lightRef = useRef();

  useFrame((state) => {
    
    const t = state.clock.elapsedTime;
    console.log('frame', state.clock.elapsedTime);

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 2) * 5;
      lightRef.current.position.z = Math.cos(t * 0.5) * 5;
      lightRef.current.position.y = Math.sin(t * 0.3) * 2 + 3;
    }
  });

  return <directionalLight ref={lightRef} intensity={5} />;
}