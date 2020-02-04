import { Router } from 'express';
import Controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const traineeRouter: Router = Router();
traineeRouter.route('/')
    .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), Controller.create)
    .post(authMiddleWare('traineeModule', 'read'), validationHandler(validation.create), Controller.list);
traineeRouter.route('/:id')
    .delete(authMiddleWare('traineeModule', 'read'), validationHandler(validation.delete), Controller.delete)
    .put(authMiddleWare('traineeModule', 'read'), validationHandler(validation.update), Controller.update);
export default traineeRouter;