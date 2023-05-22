import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../Logo';

import paths from '@/services/paths.json';

import s from './Navigation.module.css';

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
              className={s.link}
            >
              Про нас
            </ScrollLink>
          ) : (
            <Link tabIndex={1} href={`/#${paths.about}`} className={s.link}>
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
              className={s.link}
            >
              Галерея
            </ScrollLink>
          ) : (
            <Link tabIndex={1} href={`/#${paths.gallery}`} className={s.link}>
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
              className={s.link}
            >
              Наші переваги
            </ScrollLink>
          ) : (
            <Link
              tabIndex={1}
              href={`/#${paths.advantages}`}
              className={s.link}
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
