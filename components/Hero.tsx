import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4">
      
      {/* Background Image — TOP PRIORITY, NO BLUR */}
      <div 
        className="absolute inset-0 z-0 
          bg-[position:50%_1%] 
          bg-no-repeat 
          md:bg-cover 
          bg-contain 
          opacity-60 
          md:scale-105 
          scale-100 
          pointer-events-none 
          transition-opacity 
          duration-1000"
        style={{ backgroundImage: `url('/images/background.png')` }}
      />

      {/* Bottom Fade Only — NO TOP GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.95] md:leading-none pb-4 px-2 break-words text-rose-600"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Undercurrents
        </h1>
        
        <p 
          className="text-sm sm:text-lg md:text-2xl text-gray-400 font-light tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-[90vw] mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          Architecture of Chaos
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden xs:block">
        <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-rose-600 to-transparent rounded-full" />
      </div>

    </section>
  );
};

export default Hero;