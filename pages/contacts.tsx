import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Контакти</h1>
      <ContactForm />
    </div>
  );
};
export default ContactPage;
