import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function Neuron() {
  const meshRef = useRef<THREE.Group | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const { children } = useLoader(OBJLoader, 'images/neuron.obj');

  return (
    
      <group ref={groupRef} scale={[1, 1, 1]}>
        {children.map((child) => (
          <primitive object={child} key={child.uuid} />
        ))}
      </group>
    
  );
}
