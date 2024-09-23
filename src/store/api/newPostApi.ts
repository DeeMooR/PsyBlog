import axios from "axios";
import { endpoints } from "./endpoints";
import { ICreateBlock, IFullPost, IOptionalPostFields, IPostRequiredFields, IUpdateBlock } from "src/interfaces";
import { IDeleteBlockAction } from "../actions";
import { convertToFormData } from "../config";

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

export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<void> =>
  axios.put(`${endpoints.posts}/${id}`, body);

export const updatePostImageApi = (post_id: number, image: File): Promise<void> =>
  axios.put(endpoints.postImage, convertToFormData({post_id, image}));
  
export const deletePostApi = (id: number): Promise<void> =>
  axios.delete(`${endpoints.posts}/${id}`);


export const createBlockApi = (body: ICreateBlock): Promise<void> =>
  axios.post(endpoints.postBlock, body);

export const updateBlockApi = (body: IUpdateBlock): Promise<void> =>
  axios.put(endpoints.postBlock, body);

export const deleteBlockApi = (body: IDeleteBlockAction): Promise<void> =>
  axios.delete(endpoints.postBlock, {data: body});