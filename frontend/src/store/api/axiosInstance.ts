import axios, { AxiosError } from "axios";
import { AppDispatch } from "../hooks";
import { logoutAdmin } from "../slices";

const baseURL = 'http://87.228.19.145:5000/api/';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
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