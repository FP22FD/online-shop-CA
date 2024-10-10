//storage API endpoints

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_PRODUCTS = `${API_BASE_URL}/online-shop/`;
export const API_PRODUCT = (id: string) => `${API_BASE_URL}/online-shop/${id}`;
