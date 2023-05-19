import React from 'react';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Advantages from './Advantages';
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
