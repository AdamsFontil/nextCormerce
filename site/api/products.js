// api.js (or any other appropriate file)
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getProducts() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/catalog/records', { cache: 'no-store' });
  const data = await res.json();
  return data;
}
