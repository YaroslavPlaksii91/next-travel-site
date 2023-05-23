import { FC, useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import Container from '@/components/Container';
import GalleryItem from '@/components/GalleryItem';

import { GalleryProps } from '@/components/GalleryItem/types';

const Gallery: FC<GalleryProps> = ({ images }) => {
  useEffect(() => {
    const galleryElement = document.getElementById('gallery');

    if (galleryElement) {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#photoGallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        showHideAnimationType: 'zoom',
        showAnimationDuration: 250,
        hideAnimationDuration: 250,
      });

      lightbox.init();

      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return (
    <section id="gallery" className="py-10 px-3 bg-blue-50">
      <Container>
        <h2 className="text-2xl text-center font-bold mb-4">
          Мандрівки, що запам&apos;ятаються!
        </h2>
        <ul
          id="photoGallery"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {images.map((image, index) => (
            <li
              key={image.id}
              className={`h-80 overflow-hidden rounded ${
                index === images.length - 1 ? 'hidden xl:block' : ''
              }`}
            >
              <GalleryItem image={image} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Gallery;
