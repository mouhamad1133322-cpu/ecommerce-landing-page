import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
timeout:10000,
headers:{'Content-Type': 'application/json' }
});

export async function fetchProducts(limit = 8, skip = 0) {
  try {
 
    const response = await api.get(`/products`, {
      params: { limit, skip },
    });
    
    return response.data; 
  } catch (error) {
 
    throw new Error(error.response?.data?.message || error.message || 'Something went wrong');
  }
}

export async function fetchFeaturedProduct(id = 1) {
  try {
    const response = await api.get(`/products/${id}`);
    
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message || 'Something went wrong');
  }
}