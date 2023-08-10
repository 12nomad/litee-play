import axios, { AxiosRequestConfig } from "axios";

export interface IResponse<T> {
  count: number;
  next: string | null;
  results: T;
}

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
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
