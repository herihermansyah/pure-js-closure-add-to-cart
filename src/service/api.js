const BASE_URL = "https://dummyjson.com";

export default async function fetchData(data) {
  try {
    let response = await fetch(`${BASE_URL}/${data}`);
    if (!response.ok) {
      return [];
    }
    return response;
  } catch (error) {
    console.error("Error fetching url:", error);
    return [];
  }
}
