import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GallerySection from '@/components/Gallery';

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
];

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <GallerySection images={images} />
      </main>
    </>
  );
};

export default Home;
