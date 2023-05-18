import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Advantages from '@/components/Advantages';
import images from '../services/images.json';

const Main: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Gallery images={images} />
      <Advantages />
    </main>
  );
};

export default Main;

export async function getStaticProps() {
  return {
    props: {
      images,
    },
  };
}
