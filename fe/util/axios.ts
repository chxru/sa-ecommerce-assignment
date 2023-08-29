import { useUserStore } from "@/store/user.store";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${useUserStore.getState().access_token}`,
  },
});

/**
 * Update the bearer token in axios instance
 * @param token access token
 */
export const UpdateAxiosBearerToken = (token: string) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const Fetcher = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
