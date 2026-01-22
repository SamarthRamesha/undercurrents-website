
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Gigs from './components/Gigs';
import Contact from './components/Contact';

// Declaration for AOS since we load it from CDN in index.html
declare var AOS: any;

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS with stricter settings for sequential storytelling
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-quart',
        once: true,
        offset: 120,
        mirror: false,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-rose-600 selection:text-white">
      {/* Navigation - Minimalist Logo Only */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-center md:justify-start items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="font-black text-2xl tracking-tighter uppercase pointer-events-auto cursor-pointer text-rose-600" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Undercurrents
        </div>
      </nav>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Members />
        <Music />
        <Gallery />
        <Gigs />
        <Contact />
      </main>

      {/* Floating Action / Back to top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-rose-600/20 hover:bg-rose-600 border border-rose-600/50 flex items-center justify-center transition-all duration-300 z-50 rounded-full group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600 group-hover:text-white transition-colors"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
};

export default App;
