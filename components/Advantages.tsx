import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="flex items-center bg-red-50">
      <div className="w-1/2 px-8">
        <h2 className="text-2xl font-bold mb-4">Наші переваги:</h2>
        <ul className="list-disc pl-4 mb-4 text-lg">
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
      <div className="w-1/2">
        <Image
          src="/images/advantages.jpg"
          alt="Map of the world"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default Advantages;
