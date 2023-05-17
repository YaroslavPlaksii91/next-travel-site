import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-300 bg-[url('/images/hero-image.jpg')] bg-cover bg-center">
      <h1 className="text-4xl text-center font-bold mb-4 text-gray-50 md:text-6xl">
        Відкрийте світ подорожей з <span className="text-blue-500">Next</span>
        <span className="text-yellow-400">Travel</span> Company
      </h1>
      <p className="text-xl text-center text-gray-50 md:text-2xl">
        Досліджуйте найкращі туристичні напрямки та переживайте незабутні
        пригоди разом з NextTravel Company. Ми пропонуємо вам унікальні
        маршрути, які дозволять вам побачити світ у всій його красі та відкрити
        нові горизонти. Приєднуйтесь до нас і створюйте незабутні спогади!
      </p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition duration-300 ">
        Залишити заявку
      </button>
    </section>
  );
};

export default Hero;
