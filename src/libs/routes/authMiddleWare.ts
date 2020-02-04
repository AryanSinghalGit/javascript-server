import * as jwt from 'jsonwebtoken';
import { default as config } from '../../config/configuration';
import hasPermission from '../hasPermission';
export default (module, permissionType) => (req, res, next) => {
    console.log('------------AUTHMIDDLEWARE------------', module, permissionType);
    try {
        const token = req.body.Authorization;
        const { Key } = config;
        const decodedUser = jwt.verify(token, Key);
        if (!decodedUser) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        const role = decodedUser.role;
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