import * as express from 'express';
const errorHandler = (err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.send({
        error: 'Not Found', message: 'error', status: 500, timestamp: new Date()
    });
    res.end('ok');
};
export default errorHandler;