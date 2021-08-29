import request from 'core/request';

const authApi = {
  login: ({ email, password }) => {
    const url = '/auth/login';
    return request.post(url, { email, password });
  },
  register: ({ firstName, lastName, email, password }) => {
    const url = '/auth/register';
    return request.post(url, { firstName, lastName, email, password });
  },
};

export default authApi;
