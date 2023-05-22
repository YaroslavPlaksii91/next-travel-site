import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ErrorPage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="relative h-screen flex flex-col justify-center bg-gray-300">
      <Image
        src="/images/hero-image.jpg"
        alt="View of the sea"
        fill
        className="h-full object-cover object-center z-0"
      />
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
