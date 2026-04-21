import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Particles } from "../components/Particles";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/black.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
       <motion.div
          className="absolute inset-0 -z-50"
          style={{
            y: mountain3Y, // zachowujemy efekt przesuwania przy scrollu
          }}
        >
          <Particles
            className="w-full h-full" // rozciąga cząsteczki na cały kontener motion.div
            quantity={10}
            ease={80}
            color={"#cc6033"}
            refresh
          />
       </motion.div>
        {/* Planets
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        /> */}
        {/* Mountain Layer 2
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        /> */}
        {/* Mountaine Layer 1 */}
       <motion.div
          className="absolute inset-0 -z-10"
          style={{
            y: mountain1Y, // używamy zmiennej dla tej konkretnej góry
          }}
        > 
          <Particles
            className="w-full h-full"
            quantity={4}
            size ={40}
            ease={50}
            color={"#ff9b31"}
            refresh
          />
       </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
