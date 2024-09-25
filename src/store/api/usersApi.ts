import { axiosInstance } from "./axiosInstance";
import { endpoints } from "./endpoints";
import { IUser } from "src/interfaces";

export const getUsersApi = (): Promise<IUser[]> =>
  axiosInstance.get(endpoints.users).then(({ data }) => data);

export const deleteUserApi = (id: number): Promise<void> =>
  axiosInstance.delete(`${endpoints.users}/${id}`);