import * as express from 'express';
import { default as mainRouter } from './router';
import * as bodyParser from 'body-parser';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import { notFoundRoute, errorHandler } from './libs/routes';
import Database from './libs/Database';
import { options } from './libs/constant';

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

  public initSwagger = () => {
    const swaggerSpec = swaggerJsDoc(options);
    return swaggerSpec;
  }

  public run = async (): Promise<Server> => {
    try {
      const { app, config: { port, mongoUrl } }: Server = this;
      await Database.open(mongoUrl);
      app.listen(port, (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`Express app Successfully started on port : ${port} `);
      });
    }
    catch (err) {
      throw err;
    }
    return this;
  }

  public initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }

  public setupRoutes = (): void => {
    const { app }: Server = this;
    this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
    app.get('/health-check', (req: express.Request, res: express.Response) => res.send('I am OK'));
    app.use('/api', mainRouter);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
}
