import { FC } from 'react';

import { MainProps } from './types';

const Main: FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
