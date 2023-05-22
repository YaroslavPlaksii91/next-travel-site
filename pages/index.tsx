import { FC } from 'react';

import Main from '@/components/Main';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Advantages from '@/components/Advantages';

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
