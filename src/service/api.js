const BASE_URL = "https://dummyjson.com/products";

export default async function getData() {
  try {
    let response = await fetch(BASE_URL);
    if (!response.ok) {
      return [];
    }
    return response;
  } catch (error) {
    console.error("Error fetching url:", error);
    return [];
  }
}
