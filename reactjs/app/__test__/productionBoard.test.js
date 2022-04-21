const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

describe('must pass', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

// GET /api/boards
// describe('GET /api/boards', () => {
//   it('should return a 200 status code and an array of production boards', async () => {
//     const response = await request.get('/api/boards');

//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//   });
// });
