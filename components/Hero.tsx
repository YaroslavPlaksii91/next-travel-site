import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className=" relative h-screen flex flex-col justify-center items-center bg-gray-300 bg-[url('/images/hero-image.jpg')] bg-cover bg-center px-28">
      <h1 className="text-4xl text-center font-bold mb-5 text-white md:text-6xl z-10">
        Відкрийте світ подорожей з <span className="text-blue-500">Next</span>
        <span className="text-yellow-400">Travel</span> Company
      </h1>
      <p className="text-xl text-center text-white md:text-xl z-10">
        Досліджуйте найкращі туристичні напрямки та переживайте незабутні
        пригоди разом з NextTravel Company. Ми пропонуємо унікальні маршрути,
        які дозволять вам побачити світ у всій його красі та відкрити нові
        горизонти. Приєднуйтесь до нас і створюйте незабутні спогади!
      </p>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition duration-250 z-10">
        Залишити заявку
      </button>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
    </section>
  );
};

export default Hero;
