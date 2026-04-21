import React, { useState } from "react";
import { motion } from "motion/react";

const Project = ({
  title,
  description,
  subDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-10 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          {isExpanded ? "Czytaj mniej" : "Czytaj więcej"}
          <motion.img
            src="assets/arrow-right.svg"
            className="w-5"
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="py-6 space-y-3 text-orange-500">
          <p className="text-base leading-relaxed">{description}</p>
          {subDescription && (
            <ul className="list-disc pl-5 space-y-2">
              {subDescription.map((item, index) => (
                <li key={index} className="text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
    </>
  );
};

export default Project;
