import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const ProcessSection = () => {
  // Wykrywamy, kiedy sekcja pojawia się na ekranie (odpali się tylko raz)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Dane naszych kroków wraz z czasem opóźnienia (delay) dla animacji
  const steps = [
    {
      id: "1",
      title: "Darmowa konsultacja",
      desc: "Umów się na 20-minutową i niezobowiązującą konsultację, na której porozmawiamy, czy możemy podjąć z Tobą współpracę.",
      icon: "/assets/chat.svg", // <--- PODMIEŃ NA SWOJE ZDJĘCIE
      stepDelay: 0.2, // Kiedy pojawia się to koło
      lineDelay: 0.8, // Kiedy zaczyna rysować się linia od tego koła
    },
    {
      id: "2",
      title: "Plan działania",
      desc: "Przygotujemy dla Ciebie indywidualną, dostosowaną do Twojej firmy strategię, która pomoże Ci zwiększyć liczbę klientów i skalować sprzedaż.",
      icon: "/assets/docs.svg", // <--- PODMIEŃ NA SWOJE ZDJĘCIE
      stepDelay: 1.4,
      lineDelay: 2.0,
    },
    {
      id: "3",
      title: "Start współpracy",
      desc: "Rozpoczynamy współpracę na przejrzystych zasadach, bez ukrytych warunków. Od razu zobaczysz, że to właśnie nasze działania przyprowadzają klientów.",
      icon: "/assets/handshake.svg", // <--- PODMIEŃ NA SWOJE ZDJĘCIE
      stepDelay: 2.6,
      lineDelay: null, // Ostatni krok nie ma linii wychodzącej
    },
  ];

  // Warianty animacji dla całego kroku (kółko + tekst)
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: customDelay, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Warianty animacji rysowania się pomarańczowej linii
  const lineVariants = {
    hidden: { width: "0%" },
    visible: (customDelay) => ({
      width: "100%",
      transition: { delay: customDelay, duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <section className="w-full py-24 bg-[#000000] overflow-hidden c-space" id="process" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-[#fd7e00] text-3xl  font-bold tracking-widest uppercase mb-2">
            Nasz proces
          </p>
          <h2 className="text-4xl md:text-3xl font-bold text-white">
            Jak wygląda proces podjęcia współpracy?
          </h2>
        </div>

        {/* Kontener na kroki i linie */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Pojedynczy Krok */}
              <motion.div
                custom={step.stepDelay}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center flex-1 z-10 mb-12 md:mb-0 group"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[3px] border-[#fd7a00] p-2 mb-6 bg-[#0d0d0d] shadow-[0_0_15px_rgba(253,191,0,0.1)] transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black-700 flex items-center justify-center p-8">
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  
                  <div className="absolute top-2 right-0 translate-x-1/4 -translate-y-1/4 w-12 h-12 bg-[#fd7a00] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-center text-sm md:text-base leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden md:block h-[2px] bg-neutral-800 absolute top-24 left-0 w-full -z-0" style={{ transform: 'translateY(-50%)' }}>
                  <motion.div
                    custom={step.lineDelay}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="absolute top-0 left-0 h-full bg-[#e78f14]"
                    style={{ originX: 0 }} 
                  />

                  <motion.div
                    custom={step.lineDelay + 0.5} 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: step.lineDelay + 0.5 }}
                    className="absolute top-1/2 right-[33%] md:right-[33%] w-3 h-3 border-t-2 border-r-2 border-[#f89b29] rotate-45 -translate-y-1/2 translate-x-1/2 bg-[#0d0d0d]" 
                 
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;