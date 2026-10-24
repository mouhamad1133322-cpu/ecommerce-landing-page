


export async function fetchProducts(limit = 8, skip = 0) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}


export async function fetchFeaturedProduct(id = 1) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch hero product');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}