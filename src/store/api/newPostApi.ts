import axios from "axios";
import { endpoints } from "./endpoints";
import { ICreateNewBlock, IFullPost, IOptionalPostFields, IPostRequiredFields, IUpdateBlock } from "src/interfaces";
import { IDeleteBlockAction } from "../actions";
import { convertToFormData } from "../config";

const headers = { 'Content-Type': 'application/json' };
const fileHeaders = { 'Content-Type': 'multipart/form-data' };

export interface IImageApi {
  post_id: number;
  image: File | null;
}

export const getFullPostApi = (id: number): Promise<IFullPost> =>
  axios.get(`${endpoints.fullPosts}/${id}`).then(({ data }) => data);

  
export const createPostApi = (body: Omit<IPostRequiredFields, 'image'>): Promise<number | null> =>
  axios.post(endpoints.posts, body).then(({ data }) => data);

export const createPostImageApi = (body: IImageApi): Promise<void> =>
  axios.post(endpoints.postImage, convertToFormData(body));


export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<IFullPost> =>
  axios.put(`${endpoints.posts}/${id}`, body, {headers}).then(({ data }) => data);

export const updatePostImageApi = (post_id: number, image: File): Promise<IFullPost> =>
  axios.put(endpoints.postImage, convertToFormData({post_id, image})).then(({ data }) => data);

  
export const deletePostApi = (id: number): Promise<void> =>
  axios.delete(`${endpoints.posts}/${id}`, {headers});

export const createBlockApi = (body: ICreateNewBlock): Promise<void> =>
  axios.post(endpoints.postBlock, body, {headers});

export const updateBlockApi = (body: IUpdateBlock): Promise<void> =>
  axios.put(endpoints.postBlock, body, {headers});

export const deleteBlockApi = (body: IDeleteBlockAction): Promise<void> =>
  axios.delete(endpoints.postBlock, {headers, data: body});