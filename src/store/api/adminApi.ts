import axios from "axios";
import { endpoints } from "./endpoints";
import { IAuth } from "src/interfaces";

export const checkAdminApi = (body: IAuth): Promise<boolean> =>
  axios.post(endpoints.checkAdmin, body).then(({ data }) => data);
