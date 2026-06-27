import React, { useState } from "react";
import { motion } from "motion/react";

const Navigation = ({ onLinkClick }) => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      onLinkClick();
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link"  onClick={(e) => handleNavClick(e, "home")}>
          Strona Główna
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, "about")}>
          O nas
        </a>
      </li>
      <li className="nav-li">
        <a href="#testimonial" className="nav-link" onClick={(e) => handleNavClick(e, "testimonial")}>
          Opinie
        </a>
      </li>
       <li className="nav-li">
        <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, "projects")}>
          FAQ
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, "contact2")}>
          Kontakt
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[100] w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.45)]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
         <a
          href="/"
          className="text-xl font-bold transition-colors text-white hover:opacity-80"
        >
          {/* Po<span className="text-[#F0841A]">Meblow</span>ani<span className="text-[#F0841A]">.</span> */}
          <img
              src={"/assets/PoMeblowani-logo-na-strone-2.png"}
              className="w-46 h-6"
            />
        </a>    
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-[#F0841A] focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
