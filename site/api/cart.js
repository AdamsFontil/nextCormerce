import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');

export async function getAllCarts() {
  const res = await fetch('https://little-violet-3254.fly.dev/api/collections/cart/records', { cache: 'no-store' });
  const data = await res.json();
  return data;
}
