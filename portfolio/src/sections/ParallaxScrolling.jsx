import { Canvas, useFrame } from "@react-three/fiber";
import ParallaxText from "../components/ParallaxText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import SocialLinks from '../components/SocialLinks'; 

const ParallaxScrolling = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start " id="home">
      <ParallaxText />
      <ParallaxBackground />
      
      <div className="absolute bottom-10 w-full z-10 flex justify-center md:justify-start md:px-10">
        <SocialLinks />
      </div>

    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default ParallaxScrolling;