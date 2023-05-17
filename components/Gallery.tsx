import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';

type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  useEffect(() => {
    const galleryElement = document.getElementById('gallery');

    if (galleryElement) {
      let lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

      return () => {
        lightbox.destroy();
        lightbox = null;
      };
    }
  }, []);

  return (
    <section className="py-10 bg-blue-50">
      <h2 className="text-2xl text-center font-bold mb-4">
        Мандрівки, що запам'ятаються!
      </h2>
      <div
        id="gallery"
        className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="h-80 overflow-hidden rounded">
            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              data-pswp-width={800}
              data-pswp-height={500}
              className="relative block w-full h-full hover:opacity-80 focus:opacity-80 transition-opacity duration-250"
            >
              <Image src={imageUrl} alt="Nature" fill />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
