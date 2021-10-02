import request from 'core/request';

const productApi = {
  getAll: params => {
    const url = 'products';
    return request.get(url, params);
  },
  getProduct: ({ id }) => {
    const url = `products/${id}`;
    return request.get(url);
  },
  createProduct: ({ name, category, description, price }) => {
    const url = 'products';
    return request.post(url, { name, category, description, price });
  },
  editProduct: ({ name, category, description, price, id, owner }) => {
    const url = `products/${id}`;
    return request.put(url, { name, category, description, price, owner });
  },
  deleteProduct: ({ id }) => {
    const url = `products/${id}`;
    return request.delete(url);
  },
};

export default productApi;
