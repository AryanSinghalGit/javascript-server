import * as express from 'express';
const notFoundRoute = (req: express.Request, res: express.Response, next): express.ErrorRequestHandler => {
    const err = new Error('Not Found');
    return next(err);
};
export default notFoundRoute;