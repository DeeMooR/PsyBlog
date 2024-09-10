import axios from "axios";
import { endpoints } from "./endpoints";
import { IOptionalPostFields, IPostFields, IPostRequiredFields } from "src/interfaces";

const headers = { 'Content-Type': 'application/json' };

export const createPostApi = (body: IPostRequiredFields): Promise<IPostFields> =>
  axios.post(endpoints.posts, body, {headers}).then(({ data }) => data);

export const updatePostApi = (id: number, body: IOptionalPostFields): Promise<IPostFields> =>
  axios.put(`${endpoints.posts}/${id}`, body, {headers}).then(({ data }) => data);

export const deletePostApi = (id: number) =>
  axios.delete(`${endpoints.posts}/${id}`, {headers});