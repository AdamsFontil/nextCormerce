const baseUrl = 'https://little-violet-3254.fly.dev/api/collections/reviews/records';

export async function getAllReviews() {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}


import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');





export async function addReview (data) {
  const record = await pb.collection('reviews').create(data);
  console.log('test record----',record)
  return record
}
