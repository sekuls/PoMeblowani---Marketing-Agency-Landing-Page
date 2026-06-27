import { useEffect, useState } from "react";
import { motion } from "motion/react";
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
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    if (!isMobile) {
      setShowText(true);
      return;
    }
    // Tekst zawsze widoczny na mobile
    setShowText(true);
  }, [isMobile]);
  
  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      <div className="relative z-20 flex min-h-screen w-full flex-col justify-between px-4 pb-6 pt-16 sm:px-6 md:px-10 md:pb-8 md:pt-24">
        <div className="flex flex-1 flex-col gap-8 md:grid md:grid-cols-[minmax(0,520px)_minmax(0,1fr)] md:items-center md:gap-10">
          <div className=" w-full md:max-w-[520px]  md:justify-self-start md:-translate-y-40">
            {showText && <ParallaxText />}
          </div>

          <div className=" relative mx-auto flex w-[80%] items-center justify-center md:justify-center md:translate-y-20">
            <motion.img
              src="/assets/team1.png"
              alt="Zespół"
              className="h-[50vh] md:h-[80vh] w-auto max-w-none object-contain pointer-events-none"
              initial={{ opacity: 0, x: isMobile ? 0 : 400, y: isMobile ? 40 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>

        <div className="relative z-40 mt-8 flex justify-center md:-mt-10  md:ml-12 md:justify-start ">
          <SocialLinks />
        </div>
      </div>

      <ParallaxBackground />
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