import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";  

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about" >
  <p className="text-[#fd7e00] text-3xl font-bold tracking-widest uppercase mb-2 text-center">
    O nas
  </p>
  
  <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] ">
    {/* Grid 1 */}
    <div className="relative flex flex-col justify-end  grid-1 overflow-hidden p-6 md:p-8 rounded-2xl border border-white/10">
      <img
        src="assets/team2.png"
        alt="Zespół PoMeblowani"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-20 md:opacity-30 z-0"
      />
      <div className="relative z-10 flex flex-col gap-3">
        <p className="text-2xl font-bold text-white">Poznaj nasz zespół</p> 
      
        <div className="text-neutral-300 text-sm md:text-base space-y-4">
          <p>
            <strong className="text-orange-400">Jakub Micota</strong> – od ponad 13 lat związany z branżą meblarską. Od najmłodszych lat pomagał przy produkcji mebli na zamówienie swojemu tacie, dzięki czemu poznał branżę meblarską na wylot. Od 2020 roku wraz ze wspólnikiem tworzy markę mgstore.com.pl, dzięki której wyposażył warsztat w park maszynowy o łącznej wartości blisko 1 mln złotych.
          </p>
          <p>
            <strong className="text-orange-400">Maciej Wyszyński</strong> – współtwórca marki mgstore.com.pl. Specjalista od reklam, który wygenerował ponad 4 mln przychodu ze sklepu. Obecnie osobiście obsługuje kampanie reklamowe klientów PoMeblowanych.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-3/4 bg-gradient-to-t from-[#0d0d0d] to-transparent z-0" />
 
  </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2  rounded-2xl ">
        <div
          ref={grid2Container}
          className="flex items-center justify-center w-full h-full relative overflow-hidden rounded-xl"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/FwksqFBlDRo?start=2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
        {/* Grid 3 */}
        <div className="grid-default-color grid-2 rounded-2xl ">
      <div
        ref={grid2Container}
        className="flex items-center justify-center w-full h-full relative overflow-hidden rounded-xl"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/I6Ef36dJPMA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
       
      </div>
    </section>
  );
};

export default About;
