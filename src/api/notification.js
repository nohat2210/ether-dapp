import request from 'core/request';

const notificationApi = {
  getNotification: id => {
    const url = `notifications/${id}`;
    return request.get(url);
  },
};

export default notificationApi;
