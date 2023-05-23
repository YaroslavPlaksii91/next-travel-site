import { FC } from 'react';

import Main from '@/components/Main';
import Hero from '@/sections/Hero';
import AboutUs from '@/sections/AboutUs';
import Gallery from '@/sections/Gallery';
import Advantages from '@/sections/Advantages';

import images from '../services/images.json';

const Home: FC = () => {
  return (
    <Main>
      <Hero />
      <AboutUs />
      <Gallery images={images} />
      <Advantages />
    </Main>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      images,
    },
  };
}
