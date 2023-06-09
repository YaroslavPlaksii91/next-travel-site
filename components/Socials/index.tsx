import { FC } from 'react';
import Link from 'next/link';

import Instagram from 'public/instagram.svg';
import Youtube from 'public/youtube.svg';
import Telegram from 'public/telegram.svg';
import Facebook from 'public/facebook.svg';

import s from './Socials.module.css';

const Socials: FC = () => {
  return (
    <ul className="flex gap-3 justify-center mb-4">
      <li>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          aria-label="Visit our instagram page"
        >
          <Instagram />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          aria-label="Visit our youtube page"
        >
          <Youtube />
        </Link>
      </li>
      <li>
        <Link
          href="https://telegram.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          aria-label="Visit our telegram page"
        >
          <Telegram />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          aria-label="Visit our facebook page"
        >
          <Facebook />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
