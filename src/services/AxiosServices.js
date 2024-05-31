import axios from "axios";
window.axios = axios;
axios.defaults.withCredentials = false;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = "http://172.27.1.31:8000/api/";
// axios.defaults.baseURL = "https://dpapi.suzuyagroup.com/api/";
