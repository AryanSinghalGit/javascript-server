import * as jwt from 'jsonwebtoken';
export default (module, permissionType) => (req, res, next) => {
    const token = req.body.token;
    const decodedUser = jwt.verify(token, key);
    if(!decodedUser){
        return next({});
    }
}