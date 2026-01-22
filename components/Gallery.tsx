import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    '/images/gallery1.webp',
    '/images/gallery2.webp',
    '/images/gallery3.webp',
    '/images/gallery4.webp',
    '/images/gallery5.webp',
    '/images/gallery6.webp',
    '/images/gallery7.webp',
    '/images/gallery8.webp',
    '/images/gallery9.webp',
    '/images/gallery10.webp',
    '/images/gallery11.webp',
  ];

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-[#050505]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold" data-aos="fade-up">Visuals</h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="overflow-hidden bg-[#0a0a0a] cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={i * 50}
          >
            <img 
              src={img} 
              alt={`Band visual ${i}`} 
              className="w-full grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
