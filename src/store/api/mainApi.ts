import axios from "axios";
import { endpoints } from "./endpoints";
import { IShortPost, IUserWithoutId } from "src/interfaces";

export const getShortPostsTopApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPostsTop).then(({ data }) => data);

export const createUserApi = (body: IUserWithoutId): Promise<void> =>
  axios.post(endpoints.users, body).then(({ data }) => data);
