export interface ITitle {
  title: string;
}

export interface IText {
  text: string;
}

export interface ITitleAndText {
  title: string;
  text: string;
}

export interface IImage {
  image: string;
  size: 'big' | 'medium' | 'small';
  withBorder: boolean;
}

export interface ITwoImages {
  image1: string;
  image2: string;
}

export interface IQuote {
  quote: string;
}

export interface IList {
  text: string;
  type: 'pointer' | 'number';
  items: string[];
}