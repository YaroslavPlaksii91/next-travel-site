import { FC } from 'react';
import Image from 'next/image';

import ContactForm from '@/components/ContactForm';

const ContactUs: FC = () => {
  return (
    <section className="relative min-h-screen py-32 md:py-24 px-2 flex flex-col justify-center items-center bg-yellow-100 ">
      <Image
        src="/images/hero-image.jpg"
        alt="View of the sea"
        fill
        className="h-full object-cover object-center z-0"
      />
      <h1 className="text-2xl text-center text-white font-bold mb-4 z-10">
        Заповніть форму і наш менеджер з вами зв&apos;яжеться
      </h1>
      <ContactForm />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </section>
  );
};

export default ContactUs;
