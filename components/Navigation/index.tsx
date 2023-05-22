import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../Logo';

import paths from '@/services/paths.json';

const Navigation: FC = () => {
  const router = useRouter();
  const isSmoothScrollEnabled = router.pathname === '/';

  return (
    <nav className="flex flex-col justify-between items-center md:flex-row ">
      <Logo />
      <ul className="flex text-sm md:text-base space-x-3 md:space-x-8">
        <li>
          {isSmoothScrollEnabled ? (
            <ScrollLink
              tabIndex={1}
              href={paths.about}
              to={paths.about}
              smooth={true}
              spy={true}
              duration={500}
              offset={-50}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Про нас
            </ScrollLink>
          ) : (
            <Link
              tabIndex={1}
              href={`/#${paths.about}`}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Про нас
            </Link>
          )}
        </li>
        <li>
          {isSmoothScrollEnabled ? (
            <ScrollLink
              tabIndex={1}
              href={paths.gallery}
              to={paths.gallery}
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Галерея
            </ScrollLink>
          ) : (
            <Link
              tabIndex={1}
              href={`/#${paths.gallery}`}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Галерея
            </Link>
          )}
        </li>
        <li>
          {isSmoothScrollEnabled ? (
            <ScrollLink
              tabIndex={1}
              href={paths.advantages}
              to={paths.advantages}
              smooth={true}
              spy={true}
              duration={500}
              offset={-50}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Наші переваги
            </ScrollLink>
          ) : (
            <Link
              tabIndex={1}
              href={`/#${paths.advantages}`}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
            >
              Наші переваги
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
