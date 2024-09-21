import { NewBlockTables } from "src/postBlocks/interfaces";
import { IImageApi } from "./api";

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

export const convertToFormData = (body: IImageApi) => {
  const formData = new FormData();
  formData.append('post_id', body.post_id.toString());
  if (body.image instanceof File) formData.append('image', body.image);
  return formData;
}

export const formatDateToDateTime = (date: Date): string => {
  return date.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};