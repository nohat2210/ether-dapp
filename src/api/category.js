import request from 'core/request';

const categoryApi = {
  getAll: () => {
    const url = 'categories';
    return request.get(url);
  },
};

export default categoryApi;
