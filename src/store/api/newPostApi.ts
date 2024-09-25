import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./endpoints";
import { ICreateBlock, IFullPost, IOptionalPostFields, IPostRequiredFields, IUpdateBlock } from "src/interfaces";
import { IDeleteBlockAction } from "../actions";
import { convertToFormData } from "../config";

export interface IImageApi {
  post_id: number;
  image: File | null;
}

export const getFullPostApi = (id: number): Promise<IFullPost> =>
  axiosInstance.get(`${endpoints.fullPosts}/${id}`).then(({ data }) => data);
  
export const createPostApi = (body: Omit<IPostRequiredFields, 'image'>): Promise<number | null> =>
  axiosInstance.post(endpoints.posts, body).then(({ data }) => data);

export const createPostImageApi = (body: IImageApi): Promise<void> =>
  axiosInstance.post(endpoints.postImage, convertToFormData(body));

export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<void> =>
  axiosInstance.put(`${endpoints.posts}/${id}`, body);

export const updatePostImageApi = (post_id: number, image: File): Promise<void> =>
  axiosInstance.put(endpoints.postImage, convertToFormData({post_id, image}));
  
export const deletePostApi = (id: number): Promise<void> =>
  axiosInstance.delete(`${endpoints.posts}/${id}`);


export const createBlockApi = (body: ICreateBlock): Promise<void> =>
  axiosInstance.post(endpoints.postBlock, body);

export const updateBlockApi = (body: IUpdateBlock): Promise<void> =>
  axiosInstance.put(endpoints.postBlock, body);

export const deleteBlockApi = (body: IDeleteBlockAction): Promise<void> =>
  axiosInstance.delete(endpoints.postBlock, {data: body});