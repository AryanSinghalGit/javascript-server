import * as mongoose from 'mongoose';
import seedData from './seedData';
export default class Database {
    static open = (mongoURL) => {
        const promise = new Promise(( resolve, reject ) => {
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    reject(err);
                }
                console.log('Database Connected at :', mongoURL);
                seedData();
                resolve();
            });
        });
        return promise;
    }
    static disconnect = () => {
        mongoose.connection.close();
        console.log('Database disconnected');
    } ;

}