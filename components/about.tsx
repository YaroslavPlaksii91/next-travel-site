import React from 'react';
import Image from 'next/image';
import Button from './Button';

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
        <Button>Залишити заявку</Button>
      </div>
    </section>
  );
};

export default AboutSection;
