import { FC } from 'react';
import Link from 'next/link';

import { LinkProps } from './types';
import paths from '@/services/paths.json';

const LinkToContacts: FC<LinkProps> = ({ children }) => {
  return (
    <Link
      href={`/${paths.contacts}`}
      className="relative block w-[180px] h-[40px] ml-auto mr-auto bg-blue-500 font-medium text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 focus:bg-white focus:text-blue-500 focus:outline-none transition-colors duration-250 z-10"
    >
      {children}
    </Link>
  );
};

export default LinkToContacts;
