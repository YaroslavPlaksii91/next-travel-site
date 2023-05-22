import { FC } from 'react';

import Container from './Container';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-20">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
