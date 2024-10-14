import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./endpoints";
import { IAuth } from "src/interfaces";

export const loginApi = (body: IAuth): Promise<string> =>
  axiosInstance.post(endpoints.login, body).then(({ data }) => data);

export const checkTokenApi = (accessToken: string): Promise<void> =>
  axiosInstance.post(endpoints.checkToken, {accessToken});

export const logoutApi = (accessToken: string | null): Promise<void> =>
  axiosInstance.post(endpoints.logout, {accessToken});
