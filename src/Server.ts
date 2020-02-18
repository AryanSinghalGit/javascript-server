import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import { default as mainRouter } from './router';
import Database from './libs/Database';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
export class Server {
    private app: express.Express;
    constructor(protected config) {
        this.app = express();
    }
    public bootstrap = (): Server => {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    public run = (): Server => {
        const { app, config: { Port, MongoURL } }: Server = this;
        Database.open(MongoURL)
            .then(() => {
                app.listen(Port, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(`Express app Successfully started on port : ${Port} `);
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            }
            );
        return this;
    }
    public initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    public setupRoutes = (): void => {
        const { app }: Server = this;
        app.get('/health-check', (req: express.Request, res: express.Response) => res.send('I am OK'));
        app.use('/api', mainRouter);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }
}