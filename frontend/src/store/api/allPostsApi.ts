import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./endpoints";
import { IShortPost } from "src/interfaces";

export const getShortPostsApi = (): Promise<IShortPost[]> =>
  axiosInstance.get(endpoints.shortPosts).then(({ data }) => data);

export const getShortPostsAdminApi = (): Promise<IShortPost[]> =>
  axiosInstance.get(endpoints.shortPostsAdmin).then(({ data }) => data);
