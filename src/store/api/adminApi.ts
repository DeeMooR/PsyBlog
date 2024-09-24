import axios from "axios";
import { endpoints } from "./endpoints";
import { IAuth } from "src/interfaces";

export const loginApi = (body: IAuth): Promise<string> =>
  axios.post(endpoints.login, body).then(({ data }) => data);

export const checkTokenApi = (accessToken: string): Promise<void> =>
  axios.post(endpoints.checkToken, {accessToken});

export const logoutApi = (accessToken: string | null): Promise<void> =>
  axios.post(endpoints.logout, {accessToken});
