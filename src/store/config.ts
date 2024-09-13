import { NewBlockTables } from "src/components";

export const BlockNameToTableName = {
  'Заголовок': 'title',
  'Текст': 'text',
  'Заголовок и текст': 'title_and_text',
  'Цитата': 'quote',
  'Перечисление': 'list',
} as const;

export const TableNameToBlockName = {
  'title': 'Заголовок',
  'text': 'Текст',
  'title_and_text': 'Заголовок и текст',
  'quote': 'Цитата',
  'list': 'Перечисление',
} as const;

export interface ISetNewPostUpdate {
  table_name: NewBlockTables,
  block_number: number,
}