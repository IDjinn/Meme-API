import connectDatabase from './database/Mongo';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import RandomRoute from './routes/memes/RandomRoute';
import MainRoute from './routes/MainRoute';
const config = require('../../config.json');

export class Server {
    public readonly app: Express;

    constructor() {
        connectDatabase();

        this.app = express();
        this.app.use('/public', express.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.listen(config.port);
        this.attachRoutes();
        console.log(`Server listen at port ${config.port}.`);
    }

    private attachRoutes() {
        const routes = [
            new MainRoute(),
            new RandomRoute(),
        ];
        routes.forEach(route => route.attach(this));
    }

}

const server = new Server();
export default server;