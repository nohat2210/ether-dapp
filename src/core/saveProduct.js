export const SAVE_PRODUCT = 'save-product';

export const getSaveProduct = () => localStorage.getItem(SAVE_PRODUCT) ?? '';
export const removeSaveProduct = () => localStorage.removeItem(SAVE_PRODUCT);
export const setProduct = saveProduct =>
  localStorage.setItem(SAVE_PRODUCT, JSON.stringify(saveProduct));
