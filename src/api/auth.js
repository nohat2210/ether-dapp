import request from 'core/request';

const authApi = {
  login: ({ email, password }) => {
    const url = 'auth/login';
    return request.post(url, { email, password });
  },
  logout: refreshToken => {
    const url = 'auth/logout';
    return request.delete(url, { refreshToken });
  },
  register: ({ firstName, lastName, email, password }) => {
    const url = 'auth/register';
    return request.post(url, { firstName, lastName, email, password });
  },
  refreshToken: () => {
    const url = 'auth/refresh-token';
    return request.post(url);
  },
};

export default authApi;
