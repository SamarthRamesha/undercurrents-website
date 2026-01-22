
import React from 'react';

const Gigs: React.FC = () => {
  const pastShows = [
    { date: 'OCT 11', venue: 'Maaya BOB', location: 'Bangalore, IND' },
    { date: 'OCT 18', venue: 'ACM Hacknight', location: 'Bangalore, IND' },
    { date: 'NOV 08', venue: 'RAFT — "Decades of Rock"', location: 'Bangalore, IND' },
    { date: 'NOV 11', venue: 'NHCE BOB', location: 'Bangalore, IND' },
  ];

  const upcomingShows = [
    { status: 'Mission pending', detail: 'Location TBA' },
    { status: 'Next battlefield', detail: 'Details incoming' },
    { status: 'Deployment date', detail: 'To be announced' },
  ];

  return (
    <section id="shows" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter" data-aos="fade-down">Battlegrounds</h2>
          <p className="text-rose-600/50 text-[10px] font-black uppercase tracking-[0.5em] mt-2">Operational Log // Sector 080</p>
        </div>
        
        <div className="space-y-2">
          {/* Past Missions */}
          <div className="mb-8 space-y-2">
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-gray-800"></span> Completed Missions
            </p>
            {pastShows.map((gig, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row items-center justify-between p-4 bg-black/40 border border-white/5 overflow-hidden group/past pointer-events-none"
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                {/* Aggressive Strikethrough / Slash */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
                   <div className="absolute top-1/2 left-[-5%] w-[110%] h-[3px] bg-rose-900 rotate-[-1.5deg] shadow-[0_0_8px_rgba(153,27,27,0.8)] border-b border-black/20" 
                        style={{ clipPath: 'polygon(0% 45%, 5% 40%, 10% 55%, 15% 42%, 20% 58%, 25% 44%, 30% 60%, 35% 46%, 40% 62%, 45% 48%, 50% 64%, 55% 50%, 60% 66%, 65% 52%, 70% 68%, 75% 54%, 80% 70%, 85% 56%, 90% 72%, 95% 58%, 100% 74%, 100% 80%, 0% 80%)' }} />
                </div>

                <div className="relative z-0 flex flex-col md:flex-row items-center gap-6 text-center md:text-left opacity-50 grayscale contrast-125 transition-all">
                  <div className="text-lg font-black text-gray-400 w-20 tracking-tighter italic">
                    {gig.date}
                  </div>
                  <div className="filter blur-[0.4px]">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">{gig.venue}</h3>
                    <p className="text-[10px] text-gray-700 font-medium uppercase tracking-tight">{gig.location}</p>
                  </div>
                </div>

                <div className="relative z-20 text-[9px] font-black uppercase tracking-[0.3em] text-rose-950 mt-2 md:mt-0 flex items-center gap-2">
                  <span className="animate-pulse">DESTROYED</span>
                  <div className="w-1 h-1 bg-rose-900 rounded-full animate-flicker" />
                </div>
                
                {/* Subtle Ember/Sparks */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                   <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-rose-900 to-transparent rotate-45 transform translate-y-full animate-ember" />
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Missions */}
          <div className="space-y-3 pt-6">
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-rose-900"></span> Active Intel
            </p>
            {upcomingShows.map((gig, index) => (
              <div 
                key={index}
                className="group flex flex-col md:flex-row items-center justify-between p-6 bg-[#050505] border border-rose-600/20 hover:border-rose-600 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left w-full">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-rose-600 transition-colors">
                      {gig.status}
                    </h3>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{gig.detail}</p>
                  </div>
                  
                  {/* Visual detail - moving scanner line */}
                  <div className="hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-rose-600/20 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-600/50 to-transparent w-20" 
                         style={{ animation: 'scan 2s linear infinite' }} />
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center gap-3">
                   <div className="w-2 h-2 bg-rose-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Pending</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="zoom-in">
          <p className="text-gray-700 text-[10px] font-mono uppercase tracking-[0.3em]">
            -- end of transmission --
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes ember {
          0% { transform: translateY(100%) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100%) rotate(45deg); opacity: 0; }
        }
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 0.99; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
        }
        .animate-flicker {
          animation: flicker 4s linear infinite;
        }
        .animate-ember {
          animation: ember 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Gigs;
