/* eslint-disable react/jsx-no-duplicate-props */
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls, Stars, directionalLight } from "@react-three/drei";
import { Suspense } from "react";


















function RotatingFBX({ url }) {
	const groupRef = useRef();
	const texture = useLoader(
		THREE.TextureLoader,
		"/images/Texture.jpg",
		// onProgress callback to log loading progress
		(xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
	);

	const matAluMedium = new THREE.MeshStandardMaterial({
		color: 0x000033, // very dark blue color
		roughness: 0.1,
		metalness: 1,
		emissive: 0x000033,
		emissiveIntensity: 0.05,
		envMapIntensity: 1,
		refractionRatio: 1,
		clearcoat: 0.05,
		clearcoatRoughness: 0.1,
		side: THREE.FrontSide, // set both sides to have the same color
		transparent: true,
		opacity: 1,
		depthWrite: true,
		depthTest: true,
		polygonOffset: true,
		polygonOffsetFactor: 1,
		polygonOffsetUnits: 1,
		alphaMap: null,
		aoMap: null,
		aoMapIntensity: 1,
		displacementBias: 0,
		displacementMap: null,
		displacementScale: 1,
		gradientMap: null,
		lightMap: null,
		lightMapIntensity: 1,
		map: null,
		morphNormals: true,
		morphTargets: true,
		normalMap: null,
		normalMapType: THREE.TangentSpaceNormalMap,
		normalScale: new THREE.Vector2(2, 1),
		roughnessMap: null,
		skinning: true,
		toneMapped: true,
		vertexColors: false,
		wireframe: false,
		clearcoatNormalScale: new THREE.Vector2(1, 1), // Add clearcoat normal scale
		flatShading: true,
		metalnessMap: null,
		roughnessMap: null,
		envMap: null,
		displacementMap: null,
		displacementScale: 0,
		displacementBias: 0,
		normalMap: null,
		normalScale: new THREE.Vector2(1, 1),
		refractionRatio: 0.98,
		transmission: 0.1,
		reflectivity: 0.5,
		// Use a normal map to add detail to the surface
	});

	const matBasic = new THREE.MeshBasicMaterial({
		map: texture,
	});

	// Load the FBX file using useLoader
	const fbx = useLoader(FBXLoader, url);
	fbx.traverse((child) => {
		if (child.isMesh) {
			child.material = matAluMedium;
			child.castShadow = true; // enable shadow casting for the mesh
			child.receiveShadow = true; // enable shadow receiving for the mesh
		}
	});

	// Set the group reference and scale it down
	useEffect(() => {
		groupRef.current = fbx;
		if (innerWidth < 500) {
			groupRef.current.scale.set(0.1 / 2, 0.1 / 2, 0.1 / 2); // set the scale to 0.75
			groupRef.current.position.set(0, -0, 0);
		} else {
			groupRef.current.scale.set(0.1 / 1.1, 0.1 / 1.1, 0.1 / 1.1); // set the scale to 0.75
			groupRef.current.position.set(0, -16, 0);
		}

		// set the position to 0,0,0

		// Add the mesh to the group
		groupRef.current.add(
			new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), matBasic)
		);
	}, [fbx, matBasic]);

	// Rotate the group every frame
	useFrame((state, delta) => {
		if (groupRef.current) {
			groupRef.current.rotation.y += delta * 0.5;
		}
	});

	return (
		<group>
			<primitive object={fbx} />
		</group>
	);
}

function RotatingLight() {
	const lightRef = useRef();
	useFrame(() => (lightRef.current.rotation.x += 0.01));

	return (
		<directionalLight
			ref={lightRef}
			color={"#ffffff"}
			intensity={0.8}
			position={[10, 10, 10]}
		/>
	);
}



function BackgroundParticles() {
  const particleCount = 10000;
  const positionArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 1000;
  }

  const bufferGeometry = new THREE.BufferGeometry();
  bufferGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

  const material = new THREE.PointsMaterial({
    size: 2,
    sizeAttenuation: true,
    color: 'white',
    transparent: false,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png'),
    alphaTest: 0.5,
  });

  return <points geometry={bufferGeometry} material={material} />;
}

function Model() {
	return (
		<Canvas
      className=" z-[-1] h-[80%] w-full md:h-[89%]"
      gl={{
        // Enable depth buffer for shadows
        depth: true,
        // Enable alpha blending for transparent materials
        alpha: true,
      }}
      camera={{ position: [0, 0, 50] }} // Move camera back for better view
      backgroundColor={"#e9e9e9"} // Set background color
    >
      {/* Add an ambient light to the scene */}
      <ambientLight intensity={0.5} />

      {/* Add point lights */}
      <pointLight color={"#ffffff"} intensity={0.5} position={[0, 10, 0]} />
      <pointLight color={"#ffffff"} intensity={0.5} position={[10, 0, 0]} />

      {/* Add a ground plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -10, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.5} />
      </mesh>

      {/* Add a torus knot */}
      <BackgroundParticles />

      {/* Adjust the camera position */}
      
        {/* Add the rotating light source */}
        <RotatingLight />

        {/* Add the rotating FBX */}
        <RotatingFBX url={"./images/brain-simple-mesh.fbx"} />
     
    </Canvas>
	);
}

export default Model;
