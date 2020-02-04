import { Request, Response, NextFunction } from 'express';
export default (config) => {
    return (req: Request, res: Response, next: NextFunction) => {
    console.log('---------Validation Handler---------');
    console.log('The config is ', config);
    console.log(req.body);
    Object.keys(config).forEach(key => {
        console.log(`---------${ key }---------`);
        const { errorMessage } = config[key];
        const { in: reqType } = config[key];
        reqType.forEach(reqMethod => {
        const keyValue = req[reqMethod][key];
        if ( config[key].required === true ) {
            if ( keyValue === undefined || keyValue === null ) {
                return next({ error: 'Error Occured', message: `${ errorMessage }` });
            }
            if (config[key].regex !== undefined) {
                const { regex } = config[key];
                if (!regex.test(keyValue)) {
                    return next({ error: 'Error Occured', message: `${ key } is invalid` });
                }
            }
        }
        if (config[key].custom !== undefined )
            config[key].custom(reqMethod, req, res, next );
        });
    });
    return next();
    } ;
};