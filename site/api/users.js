import PocketBase from 'pocketbase';

const pb = new PocketBase('https://little-violet-3254.fly.dev');

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


const RECORD_ID = y6x2c1dsep3owdh

const getOneUser = await pb.collection('users').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
});

// export async function
