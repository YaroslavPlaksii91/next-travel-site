import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Button from './Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-red-50">
      <Container>
        <div className="flex h-[540px]">
          <div className="relative w-1/2">
            <Image
              src="/images/about.jpg"
              alt="Passports"
              fill
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 px-8">
            <h2 className="text-2xl font-bold mb-4">Про нас</h2>
            <p className="text-lg mb-4">
              Ми - компанія, яка пропонує незабутні подорожі до найкращих
              туристичних напрямків. Долучайтеся до нас, щоб пережити світові
              пригоди!
            </p>
            <Button>Залишити заявку</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
