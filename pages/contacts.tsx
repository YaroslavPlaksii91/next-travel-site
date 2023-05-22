import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Main from '@/components/Main';
import ContactUs from '@/sections/ContactUs';

const ContactPage: FC = () => {
  return (
    <>
      <Main>
        <ContactUs />
      </Main>

      <Toaster />
    </>
  );
};

export default ContactPage;
