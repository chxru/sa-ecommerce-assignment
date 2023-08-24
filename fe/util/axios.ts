import { useUserStore } from "@/store/user.store";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${useUserStore.getState().access_token}`,
  },
});

export const Fetcher = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};
