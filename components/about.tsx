import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex items-center py-10">
      <div className="w-1/2">
        <Image
          src="/images/about.jpg"
          alt="Passports"
          width={650}
          height={500}
        />
      </div>
      <div className="w-1/2 px-8">
        <h2 className="text-2xl font-bold mb-4">Про нас</h2>
        <p className="text-lg">
          Ми - компанія, яка пропонує незабутні подорожі до найкращих
          туристичних напрямків. Долучайтеся до нас, щоб пережити світові
          пригоди!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
