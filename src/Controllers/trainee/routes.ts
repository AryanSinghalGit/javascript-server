import { Router } from 'express';
import controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const traineeRouter: Router = Router();
traineeRouter.route('/')
    .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), controller.list)
    .post(authMiddleWare('traineeModule', 'write'), validationHandler(validation.create), controller.create)
    .put(authMiddleWare('traineeModule', 'write'), validationHandler(validation.update), controller.update);
traineeRouter.route('/:id')
    .delete(authMiddleWare('traineeModule', 'delete'), validationHandler(validation.delete), controller.delete);
export default traineeRouter;