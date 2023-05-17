import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex items-center bg-red-50">
      <div className="w-1/2">
        <Image
          src="/images/about.jpg"
          alt="Passports"
          width={800}
          height={600}
        />
      </div>
      <div className="w-1/2 px-8">
        <h2 className="text-2xl font-bold mb-4">Про нас</h2>
        <p className="text-lg">
          Ми - компанія, яка пропонує незабутні подорожі до найкращих
          туристичних напрямків. Долучайтеся до нас, щоб пережити світові
          пригоди!
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition duration-300 ">
          Залишити заявку
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
