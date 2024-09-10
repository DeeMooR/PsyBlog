import axios from "axios";
import { endpoints } from "./endpoints";
import { IShortPost } from "src/interfaces";

export const getShortPostsApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPosts).then(({ data }) => data);

export const getShortPostsAdminApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPostsAdmin).then(({ data }) => data);
