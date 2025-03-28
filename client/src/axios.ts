import axios from "axios";

export const API = import.meta.env.VITE_API ;


const Axios = axios.create({
  baseURL: API,
});

export default Axios;

