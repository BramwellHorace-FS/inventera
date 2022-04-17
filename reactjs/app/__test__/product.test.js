const app = require('../');
const supertest = require('supertest');
const request = supertest(app);

let token;
let id;

beforeAll(async () => {
  const response = await request.post('/api/auth/login').send({
    email: 'johnmart@email.com',
    password: 'Johnmart123!',
  });

  token = response.body.token;
});

// GET /api/products
describe('GET /api/products', () => {
  it('should return a 200 status code and an array of products', async () => {
    const response = await request.get('/api/products').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

// POST /api/products
describe('POST /api/products', () => {
  it('should return a 201 status code and a product', async () => {
    const response = await request.post('/api/products').set('Authorization', `Bearer ${token}`).send({
      name: '16oz Candle',
      stock: '5',
      minStock: '2',
      unitId: '61742218-bccb-4f32-89b0-d1622773a1b6',
      unitCost: '5',
      sku: '14-CAN',
      categoryId: '6d4377a5-5f3e-48d2-9941-5ac92293d538',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
    });
    id = response.body.id;
    console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('16oz Candle');
  });
});

// GET /api/products/:id
describe('GET /api/products/:id', () => {
  it('should return a 200 status code and a product', async () => {
    const response = await request.get(`/api/products/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('16oz Candle');
  });
});

// PUT /api/products/:id
describe('PUT /api/products/:id', () => {
  it('should return a 200 status code and a product', async () => {
    const response = await request.put(`/api/products/${id}`).set('Authorization', `Bearer ${token}`).send({
      stock: '30',
    });
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('16oz Candle');
  });
});

// DELETE /api/products/:id
describe('DELETE /api/products/:id', () => {
  it('should return a 200 status code and a product', async () => {
    const response = await request.delete(`/api/products/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
