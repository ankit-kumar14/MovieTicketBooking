const request = require('supertest');
const app = require('../app');

describe('Movie Ticket API', () => {
  let bearerToken;

  beforeAll(() => {
    bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0T24iOiJNb3ZpZW5hbWUifQ.K8Cr7Gy6Vgf6uysZV2OI--ei3mBzsmV4UOiE3pMx3p0';
  });

  it('should create a new ticket', async () => {
    const response = await request(app)
      .post('/api/tickets')
      .set('Authorization', `Bearer ${bearerToken}`)
      .send({
        creation_date: '2023-06-15',
        customer_name: 'John Doe',
        movie_title: 'Inception',
        movie_time: '18:00',
        ticket_price: 10.99,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should retrieve all tickets', async () => {
    const response = await request(app)
      .get('/api/tickets')
      .set('Authorization', `Bearer ${bearerToken}`);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
