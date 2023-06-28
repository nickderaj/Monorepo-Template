import app from '@/app';
import { StatusEnum } from '@/types/ApiTypes';
import request from 'supertest';

describe('health check', () => {
  it('should return OK for the health check route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(StatusEnum.OK);
    expect(response.body).toEqual({ message: 'OK' });
  });
});
