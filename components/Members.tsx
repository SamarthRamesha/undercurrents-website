
import React from 'react';
import { MEMBERS } from '../constants.tsx';

const Members: React.FC = () => {
  // Reveal timing constants (ms)
  const TIMINGS = {
    IDENTITY_DELAY: 0,
    IMAGE_DELAY: 500,
    STAT_START_DELAY: 1000,
    STAT_STEP: 200,
    METADATA_DELAY: 1800,
    DURATION: 1000
  };

  return (
    <section id="members" className="bg-[#050505]">
      {/* Intro Header */}
      <div className="pt-24 pb-12 px-6 text-center border-b border-white/5 bg-black">
        <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase text-rose-600" data-aos="fade-down">
          The Collective
        </h2>
        <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold" data-aos="fade-up" data-aos-delay="200">
          Neural-Sync Profile Analysis // Personnel 01-07
        </p>
      </div>

      {/* 7 Member Reveal Tracks */}
      {MEMBERS.map((member, index) => {
        const trackId = `member-track-${member.id}`;
        return (
          <div 
            key={member.id} 
            id={trackId}
            className="relative h-[130vh]"
          >
            {/* 
              Sticky Viewport 
              Using flex-col and top-padding instead of justify-center 
              to ensure the member name always starts at a mathematically consistent position.
            */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center pt-24 md:pt-32 px-8 overflow-hidden">
              
              {/* Ghost Counter - Purely decorative */}
              <div 
                className="absolute inset-0 flex items-center justify-center text-[30vw] font-black text-white/[0.01] pointer-events-none select-none z-0 uppercase italic overflow-hidden"
                data-aos="fade-in"
                data-aos-anchor={`#${trackId}`}
                data-aos-duration="2000"
              >
                0{index + 1}
              </div>

              <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                
                {/* 1. IDENTITY (Reveals First) - Removed inconsistent mb-16, added member-identity-block */}
                <div 
                  className="member-identity-block text-center w-full" 
                  data-aos="fade-up" 
                  data-aos-anchor={`#${trackId}`}
                  data-aos-delay={TIMINGS.IDENTITY_DELAY}
                  data-aos-duration={TIMINGS.DURATION}
                >
                  <p className="text-rose-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3">
                    {member.role}
                  </p>
                  <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] pb-2 break-words">
                    {member.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center w-full max-w-5xl">
                  
                  {/* 2. PHOTO (Reveals Second) */}
                  <div 
                    className="relative aspect-[4/5] w-full max-w-[260px] md:max-w-sm mx-auto lg:mx-0"
                    data-aos="zoom-in"
                    data-aos-anchor={`#${trackId}`}
                    data-aos-delay={TIMINGS.IMAGE_DELAY}
                    data-aos-duration={TIMINGS.DURATION}
                  >
                    <div className="absolute inset-0 border border-white/10 -translate-x-3 -translate-y-3" />
                    <div className="absolute inset-0 border border-rose-600 translate-x-3 translate-y-3 opacity-20" />
                    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0a]">
                      
                      {/* IMAGE */}
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-full h-full object-cover grayscale contrast-150 ${
                          member.name === "Nimit Jain"
                            ? "brightness-120"
                            : "brightness-95"
                        }`}/>

                      {/* TOP FADE */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

                      {/* BOTTOM FADE */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                      {/* LEFT FADE */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent pointer-events-none" />

                      {/* RIGHT FADE */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-transparent pointer-events-none" />

                      {/* EDGE SOFTENER (NO CORNER BIAS) */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                    </div>
                  </div>

                  {/* 3. STATS (Sequence of 3) */}
                  <div className="w-full flex flex-col justify-center">
                    <div 
                      className="mb-8 pb-3 border-b border-white/10"
                      data-aos="fade-up"
                      data-aos-anchor={`#${trackId}`}
                      data-aos-delay={TIMINGS.STAT_START_DELAY - 200}
                    >
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                        Biometric Output
                      </h4>
                    </div>
                    
                    <div className="space-y-8">
                      {member.stats.map((stat, sIndex) => (
                        <div 
                          key={sIndex} 
                          className="space-y-3"
                          data-aos="fade-up"
                          data-aos-anchor={`#${trackId}`}
                          data-aos-delay={TIMINGS.STAT_START_DELAY + (sIndex * TIMINGS.STAT_STEP)}
                          data-aos-duration={TIMINGS.DURATION}
                        >
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-white/50">
                              {stat.label}
                            </span>
                            <span className="text-rose-600 font-mono text-xs font-black italic">
                              {stat.value}
                            </span>
                          </div>
                          <div className="h-[2px] w-full bg-white/5">
                            <div 
                              className="h-full bg-rose-600 transition-all duration-[1500ms] ease-out shadow-[0_0_8px_rgba(225,29,72,0.4)]"
                              style={{ width: `${stat.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 4. METADATA (Final Reveal) - Using the global link-established-divider class */}
                    <div 
                      className="link-established-divider border-white/5 flex items-center justify-between text-[9px] text-gray-600 font-mono uppercase tracking-widest w-full"
                      data-aos="fade-up"
                      data-aos-anchor={`#${trackId}`}
                      data-aos-delay={TIMINGS.METADATA_DELAY}
                    >
                      <div className="flex gap-4">
                        <span className="text-rose-600/50 font-bold">LINK_ESTABLISHED</span>
                        <span>00{member.id}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-pulse" />
                        <span>VERIFIED</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Symmetrical Section Divider */}
            {index < MEMBERS.length - 1 && (
              <div className="absolute bottom-[15vh] left-0 w-full px-12 md:px-24 z-20 pointer-events-none opacity-20">
                <div className="h-px w-full bg-white/40" />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Members;