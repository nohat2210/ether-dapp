export const CURRENT_USER = 'current-user';
export const DEFAULT_AVATAR = 'default-avatar';

export const getCurrentUser = () => localStorage.getItem(CURRENT_USER) ?? '';
export const removeCurrentUser = () => localStorage.removeItem(CURRENT_USER);
export const setCurrentUser = currentUser =>
  localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));

export const getAvatar = () => localStorage.getItem(DEFAULT_AVATAR) ?? '';
export const setAvatar = defaultAvatar => {
  return localStorage.setItem(DEFAULT_AVATAR, defaultAvatar);
};
export const removeAvatar = () => localStorage.removeItem(DEFAULT_AVATAR);
