import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import routes from './app/routes';


const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

app.use('/api/v1', routes);

app.use(globalErrorHandler)
app.use(notFound)

export default app;
