import { Router } from 'express';
import Controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes' ;
import { default as validation } from './validation' ;
const userRouter: Router = Router();
userRouter.route('/')
    .get(validationHandler(validation.get), Controller.list)
    .post(validationHandler(validation.create), Controller.create)
    .put(validationHandler(validation.update), Controller.update);

userRouter.route('/:id')
    .delete(validationHandler(validation.delete), Controller.delete);
export default userRouter;