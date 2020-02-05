import { Request, Response, NextFunction } from 'express';
export default (config) => {
    return (req: Request, res: Response, next: NextFunction) => {
    console.log('---------Validation Handler---------');
    console.log(config);
    console.log(req.body);
    const err = [];
    Object.keys(config).forEach(key => {
        console.log(`---------${ key }---------`);
        const { errorMessage } = config[key];
        const { in: reqType } = config[key];
        reqType.forEach(reqMethod => {
        const keyValue = req[reqMethod][key];
        if ( config[key].required === true ) {
            if ( keyValue === undefined || keyValue === null ) {
                err.push(`${ errorMessage }`);
            }
            if (config[key].regex !== undefined) {
                const { regex } = config[key];
                if (!regex.test(keyValue)) {
                    err.push(`${ key } is invalid`);
                }
            }
        }
        else {
            if (config[key].regex !== undefined && keyValue !== undefined ) {
                console.log('inside regex');
                const { regex } = config[key];
                if (!regex.test(keyValue)) {
                    err.push(`${ key } is invalid`);
                }
            }
        }
        if (config[key].custom !== undefined )
            if (config[key].custom(reqMethod, req, res, next )) {
                err.push(config[key].custom(reqMethod, req, res, next ));
            }
        });
    });
    console.log(err);
    if (err.length === 0)
        return next();
    else
        return next(err);
    } ;
};