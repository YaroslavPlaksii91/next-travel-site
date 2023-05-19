import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link
      href="/contacts"
      className="block text-center group focus:outline-none"
    >
      <button
        tabIndex={-1}
        className="relative bg-blue-500 font-medium text-white py-2 px-4 rounded group-hover:bg-white group-hover:text-blue-500 group-focus:bg-white group-focus:text-blue-500 group-focus:outline-none transition duration-250 z-10"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
