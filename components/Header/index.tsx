import { FC } from 'react';

import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-20">
      <Container>
        <div className="flex flex-col justify-between items-center md:flex-row">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
