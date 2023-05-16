import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Ім'я
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">
          Телефон
        </label>
        <input
          type="text"
          id="phone"
          {...register('phone', { required: true })}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Електронна пошта
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="checkbox" className="block mb-2">
          Прийняти умови
        </label>
        <input
          type="checkbox"
          id="checkbox"
          {...register('checkbox', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:pointer-events-none"
        disabled={formState.isSubmitting}
      >
        Відправити
      </button>
    </form>
  );
};

export default ContactForm;
