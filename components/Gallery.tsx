import React from 'react';

const Gallery: React.FC = () => {
  const images: string[] = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    '/images/gallery7.jpg',
    '/images/gallery8.jpg',
    '/images/gallery9.jpg',
    '/images/gallery10.jpg',
    '/images/gallery11.jpg',
    '/images/gallery12.jpg',
  ];

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-[#050505]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold" data-aos="fade-up">
          Visuals
        </h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
        {images.map((imgPath: string, i: number) => (
          <div
            key={i}
            className="overflow-hidden bg-[#0a0a0a] cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={i * 50}
          >
            <img
              src={imgPath}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;