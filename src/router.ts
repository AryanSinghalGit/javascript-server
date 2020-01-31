import { Router } from 'express';
import { traineeRouter } from './Controllers/trainee';
const mainRouter = Router();
mainRouter.use('/user', traineeRouter);
export default mainRouter;
