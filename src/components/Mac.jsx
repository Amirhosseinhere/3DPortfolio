import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Mac ({ ...props }) {
 const group =useRef();
 const {nodes, materials} = useGLTF("/mac-draco.glb");
 return(
  <group ref={group} {...props} dispose={null}>
    <group position={[0,2.96,0.1]} rotation={[Math.PI /2,0,0]}>
    <mesh material={materials.aluminuum}
     geometry={nodes["Cube008"].geometry} />
    <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />{" "}
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
    </group>
  </group>
 )
}

