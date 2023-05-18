import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  phone: string;
  email: string;
  checkbox: boolean;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success('Відправлено!');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-2/3 xl:w-1/3 z-10"
    >
      <div className="mb-5 relative">
        <label className="text-white block mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
          Ім'я
        </label>
        <input
          type="text"
          className={`${
            errors.name
              ? 'focus:border-red-300 focus:ring-red-500 border-red-500 text-red-500'
              : 'focus:border-sky-500  focus:ring-sky-500'
          } block w-full px-3 py-2 border border-slate-500 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1`}
          {...register('name', {
            required: "Це поле є обов'язковим",
            minLength: {
              value: 3,
              message: "Ім'я повинно містити принаймні 3 символи",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm absolute">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="mb-5 relative">
        <label className="text-white block mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
          Телефон
        </label>
        <input
          type="text"
          className={`${
            errors.phone
              ? 'focus:border-red-500 focus:ring-red-500 border-red-500 text-red-500'
              : 'focus:border-sky-500  focus:ring-sky-500'
          } block w-full px-3 py-2 border border-slate-500 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1`}
          {...register('phone', {
            required: "Це поле є обов'язковим",
            pattern: {
              value: /^\+?[0-9]{10,14}$/,
              message: 'Некоректний формат телефону',
            },
          })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm absolute">
            {errors.phone.message}
          </span>
        )}
      </div>
      <div className="mb-5 relative">
        <label className="text-white block mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
          Електронна пошта
        </label>
        <input
          type="email"
          className={`${
            errors.email
              ? 'focus:border-red-500 focus:ring-red-500 border-red-500 text-red-500'
              : 'focus:border-sky-500  focus:ring-sky-500'
          } block w-full px-3 py-2 border border-slate-500 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1`}
          {...register('email', {
            required: "Це поле є обов'язковим",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Введіть дійсну електронну пошту',
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm absolute">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="flex items-center text-white">
          <input
            type="checkbox"
            className={`mr-2 cursor-pointer`}
            {...register('checkbox', { required: "Це поле є обов'язковим" })}
          />
          {errors.checkbox ? (
            <p className="text-red-500">{errors.checkbox.message}</p>
          ) : (
            'Погоджуюсь на обробку персональних даних'
          )}
        </label>
      </div>
      <button
        type="submit"
        className="block mx-auto bg-blue-500 text-white px-4 py-2 rounded hover{...errors.checkbox ? 'bg-blue-600' : 'bg-blue-500'}"
      >
        Відправити
      </button>
    </form>
  );
};

export default ContactForm;
