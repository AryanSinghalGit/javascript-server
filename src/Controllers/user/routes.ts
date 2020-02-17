import { Router } from 'express';
import Controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes/index' ;
import { default as validation } from './validation' ;
const userRouter: Router = Router();
userRouter.route('/')
    .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), Controller.list)
    .post(authMiddleWare('traineeModule', 'read'), validationHandler(validation.create), Controller.create)
    .put(authMiddleWare('traineeModule', 'read'), validationHandler(validation.update), Controller.update);
userRouter.route('/:id')
        .delete(authMiddleWare('traineeModule', 'read'), validationHandler(validation.delete), Controller.delete);
userRouter.route('/me')
        .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), Controller.me);
userRouter.route('/login')
    .post(validationHandler(validation.login), Controller.login);
export default userRouter;