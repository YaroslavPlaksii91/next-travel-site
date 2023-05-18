import React from 'react';
import Nav from './Navigation';
import Container from './Container';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-20">
      <Container>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
