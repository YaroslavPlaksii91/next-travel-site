import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="font-bold -skew-y-6 -skew-x-6 hover:-skew-y-0 hover:-skew-x-0 hover:outline-none focus:-skew-y-0 focus:-skew-x-0 focus:outline-none transition-transform duration-250"
      >
        <span className="text-blue-500 text-xl">Next</span>
        <span className="text-yellow-400 text-xl">Travel</span>
      </Link>
      <ul className="flex space-x-8">
        <li>
          <ScrollLink
            tabIndex={1}
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
            className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
          >
            Про нас
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            tabIndex={1}
            to="gallery"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
          >
            Галерея
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            tabIndex={1}
            to="advantages"
            smooth={true}
            spy={true}
            duration={500}
            className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
          >
            Наші переваги
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
