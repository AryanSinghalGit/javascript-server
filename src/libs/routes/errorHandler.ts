import * as express from 'express';
const errorHandler = (err, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.send({
        error: err.error, message: err.message, status: 500, timestamp: new Date()
    });
    res.end('ok');
};
export default errorHandler;