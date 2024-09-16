import axios from "axios";
import { endpoints } from "./endpoints";
import { IShortPost, IUser } from "src/interfaces";

export const getShortPostsTopApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPostsTop).then(({ data }) => data);

export const createUserApi = (body: IUser): Promise<void> =>
  axios.post(endpoints.user, body).then(({ data }) => data);
