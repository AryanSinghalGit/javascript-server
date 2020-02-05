import { Router } from 'express';
import Controller from './Controller';
import { validationHandler } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const traineeRouter: Router = Router();
traineeRouter.route('/')
    .get(validationHandler(validation.get), Controller.list)
    .post(validationHandler(validation.create), Controller.create);
traineeRouter.route('/:id')
    .delete(validationHandler(validation.delete), Controller.delete)
    .put(validationHandler(validation.update), Controller.update);
export default traineeRouter;