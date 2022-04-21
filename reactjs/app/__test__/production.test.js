const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;
let id;

// beforeAll(async () => {
//   const response = await request.post('/api/auth/login').send({
//     email: 'johnmart@email.com',
//     password: 'Johnmart123!',
//   });

//   token = response.body.token;
// });

// // GET /api/productions
// describe('GET /api/productions', () => {
//   it('should return a 200 status code and an array of production items', async () => {
//     const response = await request.get('/api/productions').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//   });
// });

// // POST /api/productions
// describe('POST /api/productions', () => {
//   it('should return a 201 status code and a production item', async () => {
//     const response = await request.post('/api/productions').set('Authorization', `Bearer ${token}`).send({
//       name: 'Astrological Collection',
//       quantity: 32,
//       status: 0,
//       dueDate: '2022-08-08T00:00:00.000Z',
//       userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
//       productionBoardId: '6249ef1c-c110-4070-bb11-5ede29a9979c',
//     });
//     id = response.body.id;
//     console.log(response.body);
//     expect(response.status).toBe(201);
//     expect(response.body.name).toBe('Astrological Collection');
//   });
// });

// // GET /api/productions/:id
// describe('GET /api/productions/:id', () => {
//   it('should return a 200 status code and a production item', async () => {
//     const response = await request.get(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe('Astrological Collection');
//   });
// });

// // PUT /api/productions/:id
// describe('PUT /api/productions/:id', () => {
//   it('should return a 200 status code and a production item', async () => {
//     const response = await request.put(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`).send({
//       status: 1,
//     });

//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe('Astrological Collection');
//   });
// });

// // DELETE /api/productions/:id
// describe('DELETE /api/productions/:id', () => {
//   it('should return a 204 status code', async () => {
//     const response = await request.delete(`/api/productions/${id}`).set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(204);
//   });
// });
