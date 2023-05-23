import { FC, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Container from '@/components/Container';
import GalleryItem from '@/components/GalleryItem';

import { GalleryProps } from '@/components/GalleryItem/types';

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [isCenterMode, setIsCenterMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCenterMode(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="gallery" className="py-10 px-3 bg-blue-50">
      <Container>
        <h2 className="text-2xl text-center font-bold mb-4">
          Мандрівки, що запам&apos;ятаються!
        </h2>
        <Carousel
          ariaLabel="gallery"
          autoPlay
          infiniteLoop
          emulateTouch
          centerMode={isCenterMode}
          centerSlidePercentage={50}
          transitionTime={1000}
          showStatus={false}
          showThumbs={false}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className={'h-[400px] xl:h-[480px] overflow-hidden rounded'}
            >
              <GalleryItem image={image} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;
