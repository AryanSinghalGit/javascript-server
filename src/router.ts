import { Router } from 'express';
import { traineeRouter } from './Controllers/trainee';
const mainRouter: Router = Router();
mainRouter.use('/trainee', traineeRouter);
export default mainRouter;
