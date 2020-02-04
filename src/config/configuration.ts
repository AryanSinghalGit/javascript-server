import { IConfig } from './IConfig';
import { config } from 'dotenv';
config();
const configuration: IConfig = {
    Port : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV,
    Key : process.env.SECRET_KEY
};
Object.freeze(configuration);
export default configuration;