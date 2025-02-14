import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import Heart from "../components/Heart";

const Hero = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="w-full h-full  inset-0 flex">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Heart scale={8} />
            <Ring />
            <ambientLight intensity={4} />
            <directionalLight position={[15, 10, 9]} intensity={0.8} />
            <group></group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
