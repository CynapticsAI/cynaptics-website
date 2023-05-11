import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingFBX({ url }) {
  const fbxRef = useRef();

  // Load the FBX file using useLoader
  const fbx = useLoader(FBXLoader, url);

  // Set the FBX object reference and scale it down
  useEffect(() => {
    fbxRef.current = fbx;
    fbxRef.current.scale.set(0.01*1.5/2, 0.01*1.5/2, 0.01*1.5/2); // set the scale to 0.1
    fbxRef.current.position.set(0, 0, 0); // set the position to 0,0,0
  }, [fbx]);

  // Rotate the FBX every frame
  useFrame((state, delta) => {
    if (fbxRef.current) {
      fbxRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh>
      <primitive object={fbx} />
    </mesh>
  );
}

function Model() {
  return (
    <Canvas  className="top-[150px] md:top-[200px]" style={{ width: "100%", height: "100vh",position:"absolute",left:0 }}>
      <ambientLight />
      <RotatingFBX url={"./images/brain-simple-mesh.fbx"} />
    </Canvas>
  );
}

export default Model;
