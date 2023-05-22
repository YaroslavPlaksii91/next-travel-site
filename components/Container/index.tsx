import { FC } from 'react';

import { ContainerProps } from './types';

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto md:px-6 xl:px-8">{children}</div>;
};

export default Container;
