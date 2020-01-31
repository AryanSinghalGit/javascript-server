import { Router } from 'express';
import Controller from './Controller';
const traineeRouter: Router = Router();
traineeRouter.route('/')
    .get(Controller.create)
    .post(Controller.list);
traineeRouter.route('/:id')
    .delete(Controller.delete)
    .put(Controller.update);
export default traineeRouter;