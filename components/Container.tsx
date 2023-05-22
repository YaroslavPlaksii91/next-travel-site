import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto md:px-6 xl:px-8">{children}</div>;
};

export default Container;
