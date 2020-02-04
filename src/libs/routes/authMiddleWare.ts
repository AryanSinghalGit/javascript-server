import * as jwt from 'jsonwebtoken';
import { default as config } from '../../config/configuration';
import hasPermission from '../hasPermission';
import { Request, Response, NextFunction } from 'express';
export default (module, permissionType) => (req: Request, res: Response, next: NextFunction) => {
    console.log('------------AUTHMIDDLEWARE------------', module, permissionType);
    try {
        const token: string = req.headers.authorization;
        console.log(token);
        const { Key } = config;
        const decodedUser = jwt.verify(token, Key);
        if (!decodedUser) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        const role: string = decodedUser.role;
        if (!hasPermission(module, role, permissionType)) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        next();
    }
    catch (error) {
        return next({
            staus: 403,
            error: 'Unauthorized Access',
            message: error.message
        });
    }
};