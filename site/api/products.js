// api.js (or any other appropriate file)
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');


export async function getProducts() {
  const res = await fetch('https://little-violet-3254.fly.dev/api/collections/catalog/records', { cache: 'no-store' });
  const data = await res.json();
  return data;
}
