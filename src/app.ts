import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import routes from './app/routes';
import { clerkMiddleware } from '@clerk/express';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

// application routes
app.use('/api/v1', routes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;
