import * as express from 'express';
export class Server {
    private app;
    constructor(protected config) {
        this.app = express();
    }
    public bootstrap = () => {
        this.setupRoutes();
    }
    public run = () => {
        const {app , config: { Port } } = this;

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
    public setupRoutes = () => {
        const { app } = this;
        this.app.get('/health-check', (req, res) => res.send('I am OK'));
    }
}