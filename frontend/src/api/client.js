// src/api/client.js
// Central axios instance — all API calls go through here

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hm-clone-dgex.onrender.com/api',
});

// Automatically attach JWT token to every request if logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;


// ─── Products API ─────────────────────────────────────────────────
export const productApi = {
  getAll: ()               => api.get('/products'),
  getById: (id)            => api.get(`/products/${id}`),
  getByCategory: (slug)    => api.get(`/products/category/${slug}`),
  search: (q)              => api.get('/products/search', { params: { q } }),
};


// ─── Auth API ─────────────────────────────────────────────────────
export const authApi = {
  login: (email, password)               => api.post('/auth/login', { email, password }),
  register: (email, password, firstName, lastName) =>
    api.post('/auth/register', { email, password, firstName, lastName }),
};


// ─── Orders API ───────────────────────────────────────────────────
export const orderApi = {
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  placeOrder: (order)     => api.post('/orders', order),
};
