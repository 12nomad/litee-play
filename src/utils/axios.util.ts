import axios, { AxiosRequestConfig } from "axios";

export interface IResponse<T> {
  count: number;
  next: string | null;
  results: T;
}

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API },
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

class ApiClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return client
      .get<IResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (slug: string | number) => {
    return client.get<T>(this.endpoint + "/" + slug).then((res) => res.data);
  };
}

export default ApiClient;
