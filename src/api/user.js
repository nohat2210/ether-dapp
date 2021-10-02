import request from 'core/request';

const userApi = {
  postProduct: ({ id, name, description, category, price }) => {
    const url = `/users/${id}/products`;
    return request.post(url, { name, description, category, price });
  },
  getProduct: ({ params, id }) => {
    const url = `/users/${id}/products`;
    return request.get(url, { params });
  },
  updateUser: ({ id, firstName, lastName, email, birthday }) => {
    const url = `/users/${id}`;
    return request.put(url, { firstName, lastName, email, birthday });
  },
};

export default userApi;
