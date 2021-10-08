import authApi from 'api/auth';
import axios from 'axios';
import qs from 'qs';
import { getRefreshToken, getToken, setAccessToken } from './token';

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
    return config;
  },
  function (error) {
    return Promise.reject(error.response || error.message);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const token = getToken();
    const refreshToken = getRefreshToken();
    if (token && error?.response?.data?.statusCode === 401) {
      return authApi.refreshToken(refreshToken).then(response => {
        if (response?.data?.statusCode === 200) {
          setAccessToken(response.data.accessToken);
        }
      });
    }
    return Promise.reject(error.response.data || error.message);
  }
);

export default request;
