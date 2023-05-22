import { FC } from 'react';

import Container from './Container';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-8">
      <Container>
        <p>
          © 2023 Designed and produced by Yaroslav Plaksii. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
