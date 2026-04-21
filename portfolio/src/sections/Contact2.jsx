import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactDetails = [
    {
      id: 1,
      title: "Telefon:",
      value: "+48 668 871 863",
      icon: "/assets/phone.svg", 
      link: "tel:+48668871863", 
    },
    {
      id: 2,
      title: "Mail:",
      value: "maciejwyszynski@pomeblowani.pl",
      icon: "/assets/chat.svg",
      link: "mailto:maciejwyszynski@pomeblowani.pl", 
    },
    {
      id: 3,
      title: "NIP",
      value: "966 213 00 60",
      icon: "/assets/money.svg", 
      link: null, 
    },
  ];

  // animacja dla elementów listy
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (customDelay) => ({
      opacity: 1,
      x: 0,
      transition: { delay: customDelay, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact2" className="w-full py-20 bg-[#000000] c-space" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="flex-1 flex flex-col items-start">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            <p className="text-[#fd7e00] text-3xl  font-bold tracking-widest uppercase mb-2 ">
            Kontakt
          </p>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neutral-400 text-lg mb-10"
          >
            Masz dodatkowe pytania?
          </motion.p>

          <div className="flex flex-col gap-8">
            {contactDetails.map((item, index) => {
           
              const delay = 0.4 + index * 0.2;

              const RowContent = (
                <div className="flex items-center gap-6 group">

                  <div className="w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Teksty */}
                  <div className="flex flex-col">
                    <span className="text-orange-500 font-bold text-lg leading-tight">
                      {item.title}
                    </span>
                    <span className="text-white text-lg font-medium leading-tight mt-1 transition-colors duration-300 group-hover:text-orange-400">
                      {item.value}
                    </span>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.id}
                  custom={delay}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {item.link ? (
                    <a href={item.link} className="block w-fit">
                      {RowContent}
                    </a>
                  ) : (
                    <div className="block w-fit">
                      {RowContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;