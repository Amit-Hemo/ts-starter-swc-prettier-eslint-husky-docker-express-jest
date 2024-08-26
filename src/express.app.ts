import compression from 'compression';
import express, { Request, Response } from 'express';
import helmet from 'helmet';

import { statusCodes } from './constants';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

app.get('/health', (req: Request, res: Response) => {
  return res.status(statusCodes.OK).send('OK');
});

export default app;
