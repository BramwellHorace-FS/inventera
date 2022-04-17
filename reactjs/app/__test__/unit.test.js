const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

// GET /api/units
describe('GET /api/units', () => {
  it('should return a 200 status code and an array of units', async () => {
    const response = await request.get('/api/units');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
