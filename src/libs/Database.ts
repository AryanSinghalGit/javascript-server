import * as mongoose from 'mongoose';
export default class Database {
    static open = (mongoURL) => {
        const promise = new Promise(( resolve, reject ) => {
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    reject(err);
                }
                console.log('Database Connected at :', mongoURL);
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