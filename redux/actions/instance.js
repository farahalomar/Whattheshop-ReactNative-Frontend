import axios from "axios";
const instance = axios.create({
  baseURL: "http://fb84fddd.ngrok.io/api/"
});
export default instance;
