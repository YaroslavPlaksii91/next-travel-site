import React from 'react';
import Nav from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-20">
      <Nav />
    </header>
  );
};

export default Header;
