import dayjs from 'dayjs';

export const getDate = prevDays => {
  const now = dayjs();
  const date = now.subtract(prevDays, 'day').toDate();
  return date;
};

export const formatDate = (date, formatter = 'dddd D') => {
  return dayjs(date).format(formatter);
};

export const getAge = birthday => {};
