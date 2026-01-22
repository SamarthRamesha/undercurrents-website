
import React from 'react';
import { DISCOGRAPHY } from '../constants.tsx';

const Music: React.FC = () => {
  // We only show the latest entry for focus
  const featuredAlbum = DISCOGRAPHY[0];

  return (
    <section id="music" className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter" data-aos="fade-up">Sonics</h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mt-2" data-aos="fade-up" data-aos-delay="100">Project Status: Active</p>
        </div>

        <div className="w-full max-w-md" data-aos="fade-up" data-aos-delay="200">
          <div className="group relative">
            <div className="aspect-square bg-white/5 overflow-hidden mb-8 accent-glow relative border border-white/5">
              <img 
                src={featuredAlbum.cover} 
                alt="Studio Progress"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-rose-600 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600">Tracking...</span>
                 </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight uppercase leading-tight">
                Writing riffs. Breaking strings. Studio grind in progress.
              </h3>
              <p className="text-rose-600/60 text-[10px] font-black uppercase tracking-[0.4em] italic">
                Currently forging something heavy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
