import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Button from './Button';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-red-50">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full h-[460px] md:h-[540px] md:w-1/2">
            <Image
              src="/images/about.jpg"
              alt="Passports"
              fill
              className="h-full object-cover"
            />
          </div>
          <div className="w-full py-8 md:flex md:flex-col md:items-center md:justify-center md:w-1/2 px-8">
            <h2 className="text-2xl text-center font-bold mb-4">Про нас</h2>
            <p className="text-base md:text-lg mb-4">
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

export default AboutUs;
