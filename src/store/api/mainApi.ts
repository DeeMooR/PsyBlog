import axios from "axios";
import { endpoints } from "./endpoints";
import { IShortPost, IUserForm } from "src/interfaces";

export const getShortPostsTopApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPostsTop).then(({ data }) => data);

export const createUserApi = (body: IUserForm): Promise<void> =>
  axios.post(endpoints.users, body).then(({ data }) => data);
