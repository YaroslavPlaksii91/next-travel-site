import { FC, KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import InputField from '../InputField';
import Checkbox from '../Checkbox';

import { FormData } from './types';

const ContactForm: FC = () => {
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

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.checked = !target.checked;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-2/3 xl:w-1/3 z-10"
    >
      <InputField
        label="Ім'я"
        type="text"
        name="name"
        register={register}
        errors={errors}
        options={{
          required: "Це поле є обов'язковим",
          minLength: {
            value: 3,
            message: "Ім'я повинно містити принаймні 3 символи",
          },
        }}
      />

      <InputField
        label="Телефон"
        type="text"
        name="phone"
        register={register}
        errors={errors}
        options={{
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^\+?[0-9]{10,12}$/,
            message: 'Номер телефону може містити лише 10-12 цифр!',
          },
        }}
      />

      <InputField
        label="Електронна пошта"
        type="email"
        name="email"
        register={register}
        errors={errors}
        options={{
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Введіть дійсну електронну пошту',
          },
        }}
      />

      <Checkbox
        label="Погоджуюсь на обробку персональних даних"
        register={register}
        errors={errors}
        options={{ required: "Це поле є обов'язковим" }}
        onKeyDown={onKeyDown}
      />

      <button
        type="submit"
        className="block mx-auto bg-blue-500 text-white font-medium hover:bg-white focus:bg-white hover:text-blue-500 focus:text-blue-500 focus:outline-none transition-colors duration-300 px-4 py-2 rounded hover{...errors.checkbox ? 'bg-blue-600' : 'bg-blue-500'}"
      >
        Відправити
      </button>
    </form>
  );
};

export default ContactForm;
