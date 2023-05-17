import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link href="/contacts">
      <button className="relative mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition duration-250 z-10">
        {children}
      </button>
    </Link>
  );
};

export default Button;
