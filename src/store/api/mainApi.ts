import axios from "axios";
import { endpoints } from "./endpoints";
import { IShortPost } from "src/interfaces";

export const getShortPostsTopApi = (): Promise<IShortPost[]> =>
  axios.get(endpoints.shortPostsTop).then(({ data }) => data);
