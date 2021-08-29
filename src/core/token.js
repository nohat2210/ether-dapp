export const STORAGE_KEY = 'session-token';
export const ACCESS_TOKEN = 'access-token';

export const getToken = () => localStorage.getItem(STORAGE_KEY) ?? '';
export const setToken = token => localStorage.setItem(STORAGE_KEY, token);
export const removeToken = () => localStorage.removeItem(STORAGE_KEY);
