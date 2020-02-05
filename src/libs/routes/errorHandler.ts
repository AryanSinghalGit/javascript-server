import * as express from 'express';
const errorHandler = (err, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    let resp;
    if ( Array.isArray(err)) {
        resp = [];
        err.forEach(element => {
            resp.push(
                {
                error: 'Error Occurred ',
                message: element ,
                status: 500,
                timestamp: new Date()
            });
        });
    }
    else
        resp = {
                error: err.error || 'Error Occurred ',
                message: err.message || err ,
                status: 500,
                timestamp: new Date()
            };
    res.send(resp);
    res.end('ok');
};
export default errorHandler;