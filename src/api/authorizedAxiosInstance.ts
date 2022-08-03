import axios, { AxiosError } from "axios";
import { LocalStorageKey } from "../enums/localStorageKey";
import { refreshAccessToken } from "./refreshToken";

export const authorizedAxiosInstance = axios.create();

authorizedAxiosInstance.interceptors.response.use(
  undefined,
  (error: AxiosError) => {
    if (error.response) {
      const { status, config } = error.response;

      if (status === 401) {
        return refreshAccessToken().then(() => authorizedAxiosInstance(config));
      }
      return error.response;
    }
    if (error.request) {
      return error.request;
    }

    throw error;
  }
);

authorizedAxiosInstance.interceptors.request.use((requestConfigArgs) => {
  const requestConfig = requestConfigArgs;
  const successToken = localStorage.getItem(LocalStorageKey.TokenAccess);
  requestConfig.headers = requestConfig.headers || {};

  if (successToken) {
    requestConfig.headers.Authorization = `Bearer ${successToken}`;
  }
  return requestConfig;
});
