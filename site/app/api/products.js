import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');
const baseUrl = 'https://little-violet-3254.fly.dev/api/collections/catalog/records';

export async function getProducts() {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}

export async function getOneProduct(id) {
  const url = `${baseUrl}/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function addReview(id, newReview) {
  const url = `${baseUrl}/${id}`; // Modify the URL to match your API endpoint
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReview), // Convert the new review object to JSON format
  };

  try {
    const res = await fetch(url, options);
    if (res.ok) {
      const addedReview = await res.json();
      return addedReview;
    } else {
      throw new Error('Failed to add review');
    }
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
}
