import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const ParallaxText = () => {
  const words = ["nowych klientów ", "pomoc w sprzedaży", "zaufaną współpracę"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-6xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Zapewnimy ci
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-6xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {/* piekna <br /> strona */}
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-orange-400 text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            w Branży Meblarskiej
          </motion.p>
          <motion.div
            className="flex gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            <a href="#from" className="px-8 py-3 border-2 border-amber-600 bg-orange-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition" >
              Umów bezpłatną konsultację
            </a>
            <a href="#process" className="px-8 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition text-center block">
              Poznaj proces
            </a>
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-1 md:hidden w-full">
        <motion.p
          className="text-5xl font-medium sm:text=5xl text-center text-neutral-300" 
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Zapewnimy ci
        </motion.p>
        <div>
          <motion.div
          
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-orange-400 text-5xl text-center"
            />
          </motion.div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
             w Branży Meblarskiej
          </motion.p>
          <motion.div
            className="flex gap-3 mt-6 justify-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            <a href="#form" className="px-6 py-2 border-2 border-amber-900 bg-orange-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition text-sm">
              Umów bezpłatną konsultację
            </a>
            <a href="#process" className="px-6 py-2 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition text-sm">
              Poznaj proces
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxText;
