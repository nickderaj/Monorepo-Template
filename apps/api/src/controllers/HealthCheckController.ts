import { StatusEnum } from '@/types/ApiTypes';

export class HealthCheckController {
  static async get() {
    return { statusCode: StatusEnum.OK, data: { message: 'OK' } };
  }
}
