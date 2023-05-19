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
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return (
    <section className="py-10 px-1 bg-blue-50">
      <Container>
        <h2 className="text-2xl text-center font-bold mb-4">
          Мандрівки, що запам&apos;ятаються!
        </h2>
        <div
          id="gallery"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {images.map(({ href, id }, index) => (
            <div
              key={id}
              className={`h-80 overflow-hidden rounded ${
                index === images.length - 1 ? 'hidden xl:block' : ''
              }`}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                data-pswp-width={800}
                data-pswp-height={500}
                className="relative block w-full h-full hover:opacity-80 focus:opacity-80 transition-opacity duration-250"
              >
                <Image
                  src={href}
                  alt="Nature"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
