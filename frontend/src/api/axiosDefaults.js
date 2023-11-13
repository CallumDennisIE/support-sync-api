import axios from 'axios';

// Setup required code to allow HTTP requests to be made from the frontend

axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();