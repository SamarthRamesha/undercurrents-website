import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">

      {/* Preload hero image */}
      <link rel="preload" as="image" href="/images/background.jpg" />

      {/* BACKGROUND IMAGE (real <img> for speed) */}
      <img
        src="/images/background.jpg"
        alt="Undercurrents background"
        loading="eager"
        decoding="async"
        className="absolute inset-0 z-0 w-full h-full object-cover object-[50%_12%] scale-105 pointer-events-none"
      />

      {/* VERY LIGHT GLOBAL DARKEN */}
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />

      {/* SMOOTH BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      {/* SOFT EDGE VIGNETTE */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.35)_100%)]" />

      {/* CONTENT */}
      <div className="relative z-30 text-center w-full max-w-6xl mx-auto flex flex-col items-center">
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

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30 hidden xs:block">
        <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-rose-600 to-transparent rounded-full" />
      </div>

    </section>
  );
};

export default Hero;