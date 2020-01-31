import { Router } from 'express';
import { traineeRouter } from './Controllers/trainee';
const mainRouter: Router = Router();
mainRouter.use('/user', traineeRouter);
export default mainRouter;
