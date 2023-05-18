import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-gray-300 bg-[url('/images/hero-image.jpg')] bg-cover bg-center">
      <h1 className="relative text-center text-9xl font-bold text-white z-10">
        404
      </h1>
      <p className="relative text-center text-6xl font-medium text-white z-10">
        Page not found!
      </p>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
    </div>
  );
};

export default ErrorPage;
