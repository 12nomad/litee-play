import axios from "axios";

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: import.meta.env.VITE_RAWG_API },
});

export default client;
