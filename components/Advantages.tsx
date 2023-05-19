import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Button from './Button';

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="bg-red-50">
      <Container>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 px-10 py-8">
            <h2 className="text-2xl text-center font-bold mb-4">
              Наші переваги:
            </h2>
            <ul className="list-disc pl-4 mb-4 text-lg marker:text-sky-500 space-y-2">
              <li>
                <p>Досвід у галузі</p>
              </li>
              <li>
                <p>Персоналізований підхід</p>
              </li>
              <li>
                <p>Якість та безпека</p>
              </li>
              <li>
                <p>Широкий вибір</p>
              </li>
              <li>
                <p>Клієнтська підтримка</p>
              </li>
            </ul>
            <p className="text-lg mb-4">
              Оберіть нас для вашої наступної пригоди, і ми гарантуємо, що ви
              отримаєте незабутні враження та велике задоволення від подорожі!
            </p>
            <Button>Залишити заявку</Button>
          </div>
          <div className="relative w-full h-[460px] md:h-[540px] md:w-1/2">
            <Image
              src="/images/advantages.jpg"
              alt="Map of the world"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
