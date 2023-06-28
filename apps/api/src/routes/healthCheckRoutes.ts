import { HealthCheckController } from '@/controllers/HealthCheckController';
import { apiHandler } from '@/middlewares/apiHandler';
import { Router } from 'express';

const healthCheckRoutes: Router = Router();

healthCheckRoutes.route('/').get(apiHandler(HealthCheckController.get));

export { healthCheckRoutes };
