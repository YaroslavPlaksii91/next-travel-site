import { FC } from 'react';
import Image from 'next/image';

import { GalleryItemProps } from './types';

const GalleryItem: FC<GalleryItemProps> = ({ image }) => {
  const { href, alt } = image;

  return (
    <Image
      src={href}
      alt={alt}
      fill
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
    />
  );
};

export default GalleryItem;
