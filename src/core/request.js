import axios from 'axios';
import qs from 'qs';
import { getToken } from './token';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  paramsSerializer: params => qs.stringify(params),
});

request.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;
