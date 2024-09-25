import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./endpoints";
import { IShortPost, IUserWithoutId } from "src/interfaces";

export const getShortPostsTopApi = (): Promise<IShortPost[]> =>
  axiosInstance.get(endpoints.shortPostsTop).then(({ data }) => data);

export const createUserApi = (body: IUserWithoutId): Promise<void> =>
  axiosInstance.post(endpoints.users, body);
