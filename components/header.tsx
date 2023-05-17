import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 ">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="hover:-skew-y-6 hover:-skew-x-6 hover:outline-none focus:-skew-y-6 focus:-skew-x-6 focus:outline-none transition-transform duration-250"
        >
          <span className="text-blue-500 text-xl">Next</span>
          <span className="text-yellow-400 text-xl">Travel</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <ScrollLink
              tabIndex={1}
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              offset={100}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
              activeStyle={{ color: 'blue' }}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              tabIndex={1}
              to="gallery"
              smooth={true}
              spy={true}
              duration={500}
              offset={100}
              className="hover:text-blue-500 hover:outline-none focus:text-blue-500 focus:outline-none transition-colors duration-250 cursor-pointer"
              activeStyle={{ color: 'blue' }}
            >
              Gallery
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
