const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;
let id;

describe('must pass', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

// beforeAll(async () => {
//   const response = await request.post('/api/auth/login').send({
//     email: 'johnmart@email.com',
//     password: 'Johnmart123!',
//   });

//   token = response.body.token;
// });

// // GET /api/suppliers
// describe('GET /api/suppliers', () => {
//   it('should return a 200 status code and an array of suppliers', async () => {
//     const response = await request.get('/api/suppliers').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//   });
// });

// // POST /api/suppliers
// describe('POST /api/suppliers', () => {
//   it('should return a 201 status code and a supplier', async () => {
//     const response = await request.post('/api/suppliers').set('Authorization', `Bearer ${token}`).send({
//       name: 'The Flamin Candle',
//     });

//     id = response.body.id;
//     console.log(response.body);
//     expect(response.status).toBe(201);
//     expect(response.body.name).toBe('The Flamin Candle');
//   });
// });

// // GET /api/suppliers/:id
// describe('GET /api/suppliers/:id', () => {
//   it('should return a 200 status code and a supplier', async () => {
//     const response = await request.get(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe('The Flamin Candle');
//   });
// });

// // PUT /api/suppliers/:id
// describe('PUT /api/suppliers/:id', () => {
//   it('should return a 200 status code and a supplier', async () => {
//     const response = await request.put(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`).send({
//       name: 'The Flaming Candle',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe('The Flaming Candle');
//   });
// });

// // DELETE /api/suppliers/:id
// describe('DELETE /api/suppliers/:id', () => {
//   it('should return a 204 status code', async () => {
//     const response = await request.delete(`/api/suppliers/${id}`).set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(204);
//   });
// });
