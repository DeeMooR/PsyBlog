import axios from "axios";
import { endpoints } from "./endpoints";
import { IPostFields, IPostRequiredFields } from "src/interfaces";

const headers = { 'Content-Type': 'application/json' };

export const createNewPostRequiredApi = (body: IPostRequiredFields): Promise<IPostFields> =>
  axios.post(endpoints.createNewPost, body, {headers}).then(({ data }) => data);
