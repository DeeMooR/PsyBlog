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


export const BlockNameToTableName = {
  'Заголовок': 'title',
  'Текст': 'text',
  'Заголовок и текст': 'title_and_text',
  'Цитата': 'quote',
  'Перечисление': 'list'
} as const;

export type BlockNames = keyof typeof BlockNameToTableName;
export type BlockTables = typeof BlockNameToTableName[BlockNames];
export type BlockTypes = ITitle | IText | ITitleAndText | IBlockquote | IList;


export const list_types = ['Цифры', 'Пункты'];
export type ListTypes = 'Цифры' | 'Пункты';

export enum convertListTypeEng {
  'Цифры' = 'number',
  'Пункты' = 'point'
}
export enum convertListTypeRu {
  'number' = 'Цифры',
  'point' = 'Пункты'
}