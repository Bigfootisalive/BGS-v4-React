import { MongoClient } from 'mongodb';


let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://bigfoot9999:V0ggnpsBZSpaVGF6@cluster-bgs.sytybbs.mongodb.net/test`);
    await client.connect();
    db = client.db('mongo-db');
    cb();
};


export {
    db,
    connectToDb,
}; 