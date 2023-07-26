import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// const data = {
//     "username": "test_username",
//     "email": "test@example.com",
//     "emailVisibility": true,
//     "password": "12345678",
//     "passwordConfirm": "12345678",
//     "name": "test",
//     "admin": true
// };

export async function createUser() {
  const createUser = await pb.collection('users').create(data);
  console.log('info sent to api----', data)
  const createdUser = await createUser.json();
  return createdUser;
}



// (optional) send an email verification request
// await pb.collection('users').requestVerification('test@example.com');
