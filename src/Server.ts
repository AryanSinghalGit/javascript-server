import * as express from 'express';
export class Server {
    private app: express.Express;
    constructor(protected config) {
        this.app = express();
    }
    public bootstrap = (): Server => {
        this.setupRoutes();
        return this;
    }
    public run = (): Server => {
        const {app , config: { Port } }: Server = this;

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
    public setupRoutes = (): void => {
        const { app }: Server = this;
        this.app.get('/health-check', (req: express.Request, res: express.Response) => res.send('I am OK'));
    }
}