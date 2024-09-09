import axios from "axios";
import { endpoints } from "./endpoints";
import { IPostFields, IPostRequiredFields } from "src/interfaces";

const headers = { 'Content-Type': 'application/json' };

export const createNewPostApi = (body: IPostRequiredFields): Promise<IPostFields> =>
  axios.post(endpoints.newPost, body, {headers}).then(({ data }) => data);

export const updateNewPostApi = (id: number, body: IPostRequiredFields): Promise<IPostFields> =>
  axios.put(`${endpoints.newPost}/${id}`, body, {headers}).then(({ data }) => data);

export const deleteNewPostApi = (id: number) =>
  axios.delete(`${endpoints.newPost}/${id}`, {headers});