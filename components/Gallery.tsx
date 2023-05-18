import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';
import Container from './Container';

type GalleryItem = {
  id: number;
  href: string;
};

type Gallery = GalleryItem[];

const Gallery: React.FC<{ images: Gallery }> = ({ images }) => {
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
      <Container>
        <h2 className="text-2xl text-center font-bold mb-4">
          Мандрівки, що запам'ятаються!
        </h2>
        <div
          id="gallery"
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        >
          {images.map(({ href, id }) => (
            <div key={id} className="h-80 overflow-hidden rounded">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                data-pswp-width={800}
                data-pswp-height={500}
                className="relative block w-full h-full hover:opacity-80 focus:opacity-80 transition-opacity duration-250"
              >
                <Image src={href} alt="Nature" fill />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
