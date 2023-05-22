export type GalleryItem = {
    id: number;
    href: string;
    alt: string;
  };
  
  export type GalleryItemProps = {
    image: GalleryItem;
  };

  export type GalleryProps = {
    images: GalleryItem[];
  }