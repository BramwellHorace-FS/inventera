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

// GET /api/materials (success)
describe('GET /api/materials', () => {
  it('should return a 200 status code and an array of materials', async () => {
    const response = await request.get('/api/materials').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

// POST /api/materials (success)
describe('POST /api/materials', () => {
  it('should return a 201 status code and a material', async () => {
    const response = await request.post('/api/materials').set('Authorization', `Bearer ${token}`).send({
      name: 'Soy Wax Blend',
      stock: 32,
      minStock: 10,
      unitId: '47cba104-5bbd-4b5b-af25-e63be0ebaf20',
      unitCost: 2.32,
      sku: 'NAT-SWA',
      categoryId: '02e585a2-9f3f-457e-b5b3-5887af0a2aba',
      supplierId: 'a210ae06-ade4-400a-810a-292b4e30d54e',
      userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
    });

    id = response.body.id;
    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Soy Wax Blend');
  });
});

// GET /api/materials/:id (success)
describe('GET /api/materials/:id', () => {
  it('should return a 200 status code and a material', async () => {
    const response = await request.get('/api/materials/fd434df6-0076-417c-a6ba-b38e18d2a539').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Coconut Soy Wax Blend');
  });
});

// PUT /api/materials/:id (success)
describe('PUT /api/materials/:id', () => {
  it('should return a 200 status code and a material', async () => {
    const response = await request.put('/api/materials/fd434df6-0076-417c-a6ba-b38e18d2a539').set('Authorization', `Bearer ${token}`).send({
      name: 'Coconut Soy Wax',
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Coconut Soy Wax');
  });
});

// DELETE /api/materials/:id (success)
describe('DELETE /api/materials/:id', () => {
  it('should return a 204 status code and a material', async () => {
    const response = await request.delete(`/api/materials/${id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(204);
  });
});
