import axios from "axios";

const publicAxios = axios.create({
  baseURL: `https://apis.ultraveda.uz/api/`,
});

export default publicAxios;
