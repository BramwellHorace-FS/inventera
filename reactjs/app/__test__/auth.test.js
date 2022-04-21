const app = require('../');
const supertest = require('supertest');
const request = supertest(app);



// POST /api/auth/login
describe('POST /api/auth/login', () => {
  it('should return a status code of 200, a status of success, isLoggedIn: true, and a token', async () => {
    const response = await request.post('/api/auth/login').send({
      email: 'johnmart@email.com',
      password: 'Johnmart123!',
    })



// // POST /api/auth/login (success)
// describe('POST /api/auth/login', () => {
//   it('it should return a token and isLoggedIn:true', async () => {
//     const response = await request.post('/api/auth/login').send({
//       email: 'johnmart@email.com',
//       password: 'Johnmart123!',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body.token).toBeDefined();
//     expect(response.body.isLoggedIn).toBe(true);
//   });
// });

// // POST /api/auth/login (failure: user not found)
// describe('POST /api/auth/login', () => {
//   it('should return a status code 404', async () => {
//     const response = await request.post('/api/auth/login').send({
//       email: 'jimmyjohns@aol.com',
//       password: 'Jimmyjohns123!',
//     });

//     expect(response.status).toBe(404);
//   });
// });

// // POST /api/auth/login (failure: wrong password)
// describe('POST /api/auth/login', () => {
//   it('should return a status code 401', async () => {
//     const response = await request.post('/api/auth/login').send({
//       email: 'johnmart@email.com',
//       password: 'Johnmart123!!',
//     });

//     expect(response.status).toBe(401);
//     expect(response.body.error.message).toBe('Invalid credentials');
//   });
// });

// // POST /api/auth/register (success)
// // describe('POST /api/auth/register', () => {
// //   it('should return a 201 status code and isRegistered:true', async () => {
// //     const response = await request.post('/api/auth/register').send({
// //       email: 'olly@aol.com',
// //       password: 'Olly123!',
// //       name: 'Olly',
// //       businessName: 'Olly Inc.',
// //       website: 'www.olly.com',
// //     });

// //     expect(response.status).toBe(201);
// //     expect(response.body.isRegistered).toBe(true);
// //   });
// // });

// // POST /api/auth/register (failure: user already exists)
// describe('POST /api/auth/register and and error message', () => {
//   it('should return a status code 401', async () => {
//     const response = await request.post('/api/auth/register').send({
//       email: 'johnmart@email.com',
//       password: 'Johnmart123!',
//       name: 'John',
//       businessName: 'John Inc.',
//       website: 'www.john.com',
//     });

//     expect(response.status).toBe(401);
//     expect(response.body.error.message).toBe('User already exists');
//   });
// });

// // POST /api/auth/register (failure: password does not meet requirements)
// describe('POST /api/auth/register and and error message', () => {
//   it('should return a status code 400', async () => {
//     const response = await request.post('/api/auth/register').send({
//       email: 'olly2@aol.com',
//       password: 'olly123!',
//       name: 'Olly',
//       businessName: 'Olly Inc.',
//       website: 'www.olly.com',
//     });

//     expect(response.status).toBe(400);
//     expect(response.body.error.message).toBe(
//       'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
//     );
//   });
// });
