import axios from "axios";
import { endpoints } from "./endpoints";
import { IPostFields, IPostRequiredFields } from "src/interfaces";

const headers = { 'Content-Type': 'application/json' };

export const createNewPostRequiredApi = (body: IPostRequiredFields): Promise<IPostFields> =>
  axios.post(endpoints.newPostRequired, body, {headers}).then(({ data }) => data);

export const updateNewPostRequiredApi = (id: number, body: IPostRequiredFields): Promise<IPostFields> =>
  axios.put(`${endpoints.newPostRequired}/${id}`, body, {headers}).then(({ data }) => data);