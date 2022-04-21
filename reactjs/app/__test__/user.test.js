const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;

// beforeAll(async () => {
//   const response = await request.post('/api/auth/login').send({
//     email: 'johnmart@email.com',
//     password: 'Johnmart123!',
//   });

//   token = response.body.token;
// });

// // GET /api/user
// describe('GET /api/user', () => {
//   it('should return a 200 status code and an array of users', async () => {
//     const response = await request.get('/api/user').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('user');
//   });
// });

// // PUT /api/user
// describe('PUT /api/user', () => {
//   it('should return a 200 status code and a user', async () => {
//     const response = await request.put('/api/user').set('Authorization', `Bearer ${token}`).send({
//       name: 'John Martin',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('user');
//   });
// });
