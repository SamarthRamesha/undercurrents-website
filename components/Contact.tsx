
import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/undercurrentsblr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      )
    },
    { 
      name: 'Spotify', 
      url: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M7 9a12 12 0 0 1 10 0"></path>
          <path d="M8 12.5a12 12 0 0 1 8 0"></path>
          <path d="M9.5 15.5a12 12 0 0 1 5 0"></path>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UCtJPKoCrhm6Ynuuuze23Ygg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
      )
    },
  ];

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left" data-aos="fade-right">
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase text-rose-600">
            Undercurrents
          </h2>
          <p className="text-gray-500 max-w-xs mb-8">
            For booking inquiries, press, and general questions contact us directly.
          </p>
          <a 
            href="mailto:undercurrentsblr@gmail.com" 
            className="text-xl font-bold text-white hover:text-rose-600 transition-colors border-b-2 border-rose-600 pb-1"
          >
            undercurrentsblr@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12" data-aos="fade-left">
           {socialLinks.map((social) => (
             <a 
              key={social.name}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white uppercase font-bold text-xs tracking-widest flex flex-col items-center gap-3 group transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose-600 transition-colors">
                <div className="transition-all duration-300 group-hover:text-rose-600 group-hover:scale-110">
                  {social.icon}
                </div>
              </div>
              {social.name}
            </a>
           ))}
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest gap-4 text-center md:text-left">
        <p>&copy; 2024 Undercurrents. All rights reserved.</p>
        <p>Built for the heavy | Architecture of Chaos</p>
      </div>
    </footer>
  );
};

export default Contact;
