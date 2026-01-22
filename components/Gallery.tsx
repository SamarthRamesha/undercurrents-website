import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    './public/images/gallery1.jpg',
    './public/images/gallery2.jpg',
    './public/images/gallery3.jpg',
    './public/images/gallery4.jpg',
    './public/images/gallery5.jpg',
    './public/images/gallery6.jpg',
    './public/images/gallery7.jpg',
    './public/images/gallery8.jpg',
    './public/images/gallery9.jpg',
    './public/images/gallery10.jpg',
    './public/images/gallery11.jpg',
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
