import cors from 'cors';
import express, { Express } from 'express';
import morgan from 'morgan';
import { healthCheckRoutes } from './routes/healthCheckRoutes';

const app: Express = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', healthCheckRoutes);

export default app;
