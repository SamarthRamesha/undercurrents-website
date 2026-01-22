
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-12 flex items-center justify-center gap-4"
          data-aos="fade-up"
        >
          <span className="h-px w-12 bg-rose-600"></span>
          The Identity
          <span className="h-px w-12 bg-rose-600"></span>
        </h2>
        
        <div 
          className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Born from the industrial collapse of the engineering scenes in blr, 
            <span className="text-white font-medium"> Undercurrents </span> 
            blends visceral aggression with heartfelt stories. Our sound is a reflection of the friction 
            between coexistence in society and raw emotions to let out.
          </p>
          <p>
            Since 2025, we have pushed the boundaries of the metalcore genre, and taking any path and genre we get 
            while stripping away the clichés to leave behind a raw, unadulterated experience of rhythm and rage. 
            We don't just play music we build monuments to the struggle.
          </p>
        </div>
      </div>

      {/* Decorative text bg */}
      <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-white/[0.02] pointer-events-none select-none">
        VOID
      </div>
    </section>
  );
};

export default About;
