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

export interface IBlockquote {
  quote: string;
}

export interface IList {
  text: string | null;
  type: 'point' | 'number';
  items: string[];
}

export type NewBlockTypes = ITitle | IText | ITitleAndText | IBlockquote | IList;

export const BlockNameToTableName = {
  'Заголовок': 'title',
  'Текст': 'text',
  'Заголовок и текст': 'title_and_text',
  'Цитата': 'quote',
  'Перечисление (пункты)': 'list',
  'Перечисление (цифры)': 'list'
} as const;

export type NewBlockNames = keyof typeof BlockNameToTableName;
export type NewBlockTables = typeof BlockNameToTableName[NewBlockNames];

export const radioOptions: NewBlockNames[][] = [
  ['Заголовок', 'Текст', 'Заголовок и текст'],
  // ['Изображение S', 'Изображение M', 'Изображение L', 'Два изображения'],
  ['Цитата', 'Перечисление (пункты)', 'Перечисление (цифры)'],
]