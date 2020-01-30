import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute , errorHandler } from './libs/routes';
export class Server {
    private app: express.Express;
    constructor(protected config) {
        this.app = express();
    }
    public bootstrap = (): Server => {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    public run = (): Server => {
        const { app, config: { Port } }: Server = this;
        app.listen(Port, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`Express app Successfully started on port : ${Port} `);
            }
        });
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
        app.use(notFoundRoute);
        app.use(errorHandler);
    }
}