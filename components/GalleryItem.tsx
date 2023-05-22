import { FC } from 'react';
import Image from 'next/image';

type GalleryItem = {
  id: number;
  href: string;
  alt: string;
};

type GalleryItemProps = {
  image: GalleryItem;
};

const GalleryItem: FC<GalleryItemProps> = ({ image }) => {
  const { href, alt } = image;

  return (
    <a
      href={href}
      data-pswp-width={800}
      data-pswp-height={500}
      className="relative block w-full h-full hover:opacity-80 focus:opacity-80 transition-opacity duration-250"
    >
      <Image
        src={href}
        alt={alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
      />
    </a>
  );
};

export default GalleryItem;
