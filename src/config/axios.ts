import axios from 'axios';
import {TOKEN} from '../constant/account';

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${TOKEN}`;
    config.headers.accept = 'application/json';

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default axios;
