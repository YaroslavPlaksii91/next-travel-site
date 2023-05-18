import React from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen py-32 md:py-24 px-2 flex flex-col justify-center items-center bg-yellow-100 bg-[url('/images/hero-image.jpg')] bg-cover bg-center">
          <h1 className="text-2xl text-center text-white font-bold mb-4 z-10">
            Заповніть форму і наш менеджер з вами зв'яжеться
          </h1>
          <ContactForm />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};
export default ContactPage;
