import { Router } from 'express';
import Controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const traineeRouter: Router = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUser', 'read'), validationHandler(validation.get), Controller.create)
    .post(validationHandler(validation.create), Controller.list);
traineeRouter.route('/:id')
    .delete(validationHandler(validation.delete), Controller.delete)
    .put(validationHandler(validation.update), Controller.update);
export default traineeRouter;