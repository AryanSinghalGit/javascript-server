import { Router } from 'express';
import Controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const userRouter: Router = Router();
userRouter.route('/')
    .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), Controller.list)
    .post(authMiddleWare('traineeModule', 'read'), validationHandler(validation.create), Controller.create);
userRouter.route('/:id')
    .delete(authMiddleWare('traineeModule', 'read'), validationHandler(validation.delete), Controller.delete)
    .put(authMiddleWare('traineeModule', 'read'), validationHandler(validation.update), Controller.update);
export default userRouter;