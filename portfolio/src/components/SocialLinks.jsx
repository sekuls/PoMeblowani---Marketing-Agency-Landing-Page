import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';


const SocialLinks = ({ showTitle = true, iconSize = 32 }) => {
  return (

    <div className={`flex items-center justify-center ${showTitle ? 'flex-col p-6 space-y-4' : ''}`}>
      
  
      {showTitle && (
        <h3 className="text-lg font-medium text-orange-500">
          Sprawdź nasze treści na:
        </h3>
      )}

   
      <div className={`flex ${showTitle ? 'space-x-6' : 'space-x-4'}`}>
        <a 
          href="https://www.youtube.com/@PoMeblowani" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-orange-500 hover:text-red-600 transition-colors duration-300"
          aria-label="Nasz kanał na YouTube"
        >
   
          <FaYoutube size={iconSize} />
        </a>

        <a 
          href="https://www.instagram.com/po_meblowani/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-orange-500 hover:text-pink-600 transition-colors duration-300"
          aria-label="Nasz profil na Instagramie"
        >
          <FaInstagram size={iconSize} />
        </a>

        <a 
          href="https://www.facebook.com/PoMeblowaniMarketing/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-orange-500 hover:text-blue-600 transition-colors duration-300"
          aria-label="Nasz fanpage na Facebooku"
        >
          <FaFacebook size={iconSize} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;