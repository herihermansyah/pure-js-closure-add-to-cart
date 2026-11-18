import fetchData from "./api.js";

async function fetchProducts() {
  try {
    const response = await fetchData("products");
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const products = await fetchProducts();

export default products;
