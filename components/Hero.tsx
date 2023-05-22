import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen px-6 py-32 md:py-24 flex justify-center items-center bg-gray-300 md:px-28">
      <Image
        src="/images/hero-image.jpg"
        alt="View of the sea"
        fill
        className="h-full object-cover object-center z-0"
      />
      <Container>
        <h1 className="relative text-center font-bold mb-5 text-white z-10 text-3xl md:text-6xl ">
          Відкрийте світ подорожей з <span className="text-blue-500">Next</span>
          <span className="text-yellow-400">Travel</span> Company
        </h1>
        <p className="relative text-base md:text-xl text-center mb-6 text-white z-10">
          Досліджуйте найкращі туристичні напрямки та переживайте незабутні
          пригоди разом з NextTravel Company. Ми пропонуємо унікальні маршрути,
          які дозволять вам побачити світ у всій його красі та відкрити нові
          горизонти. Приєднуйтесь до нас і створюйте незабутні спогади!
        </p>
        <Button>Залишити заявку</Button>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </Container>
    </section>
  );
};

export default Hero;
