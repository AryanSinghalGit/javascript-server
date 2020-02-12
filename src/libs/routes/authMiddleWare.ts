import * as jwt from 'jsonwebtoken';
import { default as config } from '../../config/configuration';
import hasPermission from '../hasPermission';
import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import IUserModel from '../../repositories/user/IUserModel';
interface IRequest extends Request {
    user: IUserModel;
}
const authMiddleWare = (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log('------------AUTHMIDDLEWARE------------', module, permissionType);
    try {
        const token: string = req.headers.authorization;
        console.log(token);
        const { Key } = config;
        const decodedUser = jwt.verify(token, Key);
        if (!decodedUser) {
            return next({
                status: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        console.log(decodedUser);
        console.log(decodedUser._id);
        UserRepository.findOne(decodedUser._id)
        .then((userData) => {
            console.log(userData);
            req.user = userData;
            const role: string = userData.role;
            if (!hasPermission(module, role, permissionType)) {
                console.log(`${ role } does not permission of ${ permissionType }`);
                return next({
                    status: 403,
                    error: 'Unauthorized Access',
                    message: 'Unauthorized Access'
                });
            }
            next();
        })
        .catch((err) => {
            console.log(err);
            return next({
                status: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        });
    }
    catch (error) {
        return next({
            status: 403,
            error: 'Unauthorized Access',
            message: error.message
        });
    }
};

export { authMiddleWare };