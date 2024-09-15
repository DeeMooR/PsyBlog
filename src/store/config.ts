import { NewBlockTables } from "src/components";
import { ICreatePostImageApi } from "./api";
import { base64StringToBlob } from "blob-util";

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

export const convertToFormData = (body: ICreatePostImageApi) => {
  const formData = new FormData();
  formData.append('post_id', body.post_id.toString());
  if (body.image instanceof File) formData.append('image', body.image);
  return formData;
}

export const base64ToFile = async (base64: string, filename: string): Promise<File> => {
  const blob: Blob = await base64StringToBlob(base64);
  return new File([blob], filename);
}

export const postToPostFile = async (post: any) => {
  const newImage = await base64ToFile(post.image, 'image.jpg');
  return { ...post, image: newImage };
}

export const postsToPostsFile = async (response: any) => {
  const posts = await Promise.all(
    response.map(async (post: any) => postToPostFile(post))
  );
  return posts;
}