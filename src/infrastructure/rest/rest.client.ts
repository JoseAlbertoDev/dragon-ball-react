import axios from "axios";

const get = <T>(url: string) => axios.get<T>(url);

export const restClient = {
  get,
};
