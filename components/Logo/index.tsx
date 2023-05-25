import { FC } from 'react';
import Link from 'next/link';

import paths from '@/services/paths.json';

const Logo: FC = () => {
  return (
    <Link
      tabIndex={1}
      href={paths.index}
      className="mb-4 md:mb-0 font-bold text-2xl -skew-y-6 -skew-x-6 hover:-skew-y-0 hover:-skew-x-0 hover:outline-none focus:-skew-y-0 focus:-skew-x-0 focus:outline-none transition-transform duration-250"
    >
      <span className="text-blue-500">Coral</span>
      <span className="text-yellow-400">Travel</span>
    </Link>
  );
};

export default Logo;
