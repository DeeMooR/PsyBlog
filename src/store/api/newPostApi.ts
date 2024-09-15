import axios from "axios";
import { endpoints } from "./endpoints";
import { ICreateNewBlock, IFullPost, IOptionalPostFields, IPostRequiredFields, IUpdateBlock } from "src/interfaces";
import { IDeleteBlockAction } from "../actions";
import { convertToFormData } from "../config";

const headers = { 'Content-Type': 'application/json' };
const fileHeaders = { 'Content-Type': 'multipart/form-data' };

export interface ICreatePostImageApi {
  post_id: number;
  image: File;
}

export const createPostApi = (body: Omit<IPostRequiredFields, 'image'>): Promise<IFullPost> =>
  axios.post(endpoints.posts, body).then(({ data }) => data);

export const createPostImageApi = (body: ICreatePostImageApi): Promise<File> =>
  axios.post(endpoints.postImage, convertToFormData(body)).then(({ data }) => data);


export const getFullPostApi = (id: number): Promise<IFullPost> =>
  axios.get(`${endpoints.fullPost}/${id}`).then(({ data }) => data);

export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<IFullPost> =>
  axios.put(`${endpoints.posts}/${id}`, body, {headers}).then(({ data }) => data);

export const deletePostApi = (id: number) =>
  axios.delete(`${endpoints.posts}/${id}`, {headers});

export const createNewBlockApi = (body: ICreateNewBlock) =>
  axios.post(endpoints.addBlock, body, {headers});

export const updateBlockApi = (body: IUpdateBlock) =>
  axios.put(endpoints.updateBlock, body, {headers});

export const deleteBlockApi = (body: IDeleteBlockAction) =>
  axios.delete(endpoints.deleteBlock, {headers, data: body});