import axios from "axios";
import { endpoints } from "./endpoints";
import { IUser } from "src/interfaces";

export const getUsersApi = (): Promise<IUser[]> =>
  axios.get(endpoints.users).then(({ data }) => data);

export const deleteUserApi = (id: number): Promise<void> =>
  axios.delete(`${endpoints.users}/${id}`);