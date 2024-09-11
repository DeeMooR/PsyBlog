import axios from "axios";
import { endpoints } from "./endpoints";
import { ICreateNewBlock, IFullPost, IOptionalPostFields, IPostRequiredFields } from "src/interfaces";

const headers = { 'Content-Type': 'application/json' };

export const getFullPostApi = (id: number): Promise<IFullPost> =>
  axios.get(`${endpoints.fullPost}/${id}`).then(({ data }) => data);

export const createPostApi = (body: IPostRequiredFields): Promise<IFullPost> =>
  axios.post(endpoints.posts, body, {headers}).then(({ data }) => data);

export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<IFullPost> =>
  axios.put(`${endpoints.posts}/${id}`, body, {headers}).then(({ data }) => data);

export const deletePostApi = (id: number) =>
  axios.delete(`${endpoints.posts}/${id}`, {headers});

export const createNewBlockApi = (body: ICreateNewBlock) =>
  axios.post(endpoints.addBlock, body, {headers});