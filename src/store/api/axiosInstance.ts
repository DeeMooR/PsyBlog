import axios, { AxiosError } from "axios";
import { AppDispatch } from "../hooks";
import { logoutAdmin } from "../slices";

const baseURL = 'http://localhost:5000/api/';

export const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// обёртка чтобы передать dispatch
export const setupInterceptors = (dispatch: AppDispatch) => {
  axiosInstance.interceptors.response.use(undefined, async (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 403) {
        dispatch(logoutAdmin());
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  });
};