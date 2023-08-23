import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');
const baseUrl = 'https://little-violet-3254.fly.dev/api/collections/catalog/records';

export async function getProducts() {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}

export async function getOneProduct(id) {
  const url = `${baseUrl}/${id}`; // Correct URL construction
  const res = await fetch(url); // Use the constructed URL
  const data = await res.json();
  return data;
}
