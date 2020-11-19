interface Image {
  extension: string;
  path: string;
}

export interface IComic {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  price: number;
  images: Image[];
}
