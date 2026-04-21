import React, { useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";

/**
 * Zaktualizowany komponent AnimatedNumber.
 * Dodałem prop `isInView`, który blokuje animację do momentu zescrollowania.
 */
const AnimatedNumber = ({ key, target, type = "simple", isInView }) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    if (type === "simple") {
      const num = Math.round(latest).toLocaleString();
      return `${num}+`;
    }
    if (type === "currency") {
      const num = latest.toLocaleString("pl-PL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `${num} mln`;
    }
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    // Odpalamy animację TYLKO jeśli isInView jest true
    if (isInView) {
      const animation = animate(count, target, {
        duration: 2, // Lekko wydłużyłem czas do 2 sekund dla lepszego efektu
        ease: "circOut",
      });

      return () => animation.stop();
    } else {
      // Upewniamy się, że licznik stoi na 0, dopóki nie dojedziemy
      count.set(0); 
    }
  }, [count, target, isInView]); // dodaliśmy isInView do zależności

  return <motion.span key={key}>{rounded}</motion.span>;
};

const StatsSection = () => {
  // margin: "-100px" sprawia, że animacja odpala się dopiero, 
  // gdy sekcja wejdzie 100px w głąb ekranu (nie przy samej krawędzi)
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [animationKey, setAnimationKey] = useState(0);

  const stats = [
    {
      id: 1,
      icon: "/assets/client.svg", 
      title: "Zdobytych Zapytań Na Wykonanie Mebli Na Wymiar", // Poprawiona literówka (Zapytań)
      value: 1452,
      type: "simple",
    },
    {
      id: 2,
      icon: "/assets/money.svg", 
      title: "Łącznie Zarobiliśmy Naszym Klientom",
      value: 6.86,
      type: "currency",
    },
    {
      id: 3,
      icon: "/assets/handshake.svg", 
      title: "Pozyskanych Umów Na Wykonanie Mebli",
      value: 301,
      type: "simple", // Zmieniłem na "simple_no_plus" w transform jeśli chcesz bez plusa, ale w kodzie wyżej dałem fallback bez plusa
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      key={animationKey}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full py-16 bg-transparent text-center overflow-hidden c-space"
      id="stats"
    >
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row md:justify-around">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="flex-1 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-3 rounded-xl">
              <img src={stat.icon} alt={stat.title} className="w-12 h-12" />
            </div>

            <h3 className="text-sm md:text-base font-medium text-white/60 max-w-[280px]">
              {stat.title}
            </h3>

            <div className="text-5xl font-bold text-white tracking-tight">
              {/* Przekazujemy isInView do komponentu */}
              <AnimatedNumber 
                key={animationKey} 
                target={stat.value} 
                type={stat.type} 
                isInView={isInView} 
              />
            </div>
          </motion.div>
        ))}
      </div>

    
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#fd8700]" />
    </motion.section>
  );
};

export default StatsSection;