import { useLoader, useFrame } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function FalconSigil(props) {
  const data = useLoader(SVGLoader, '/falcon-sigil-filled.svg');
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const shapes = data.paths.flatMap((p) => p.toShapes(true));
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 20,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1,
    });
    geo.center();
    return geo;
  }, [data]);

  const diagonalAxis = new THREE.Vector3(1, 1, 0).normalize();

  const angleRef = useRef(0);

useFrame(() => {
  if (meshRef.current) {
    const target = -window.scrollY * 0.0015;
    angleRef.current += (target - angleRef.current) * 0.03;
    meshRef.current.quaternion.setFromAxisAngle(diagonalAxis, angleRef.current);
  }
});

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[0.002, -0.002, 0.002]} {...props}>
      <meshStandardMaterial color="#382020" metalness={1} roughness={0.25} />
    </mesh>
  );
}