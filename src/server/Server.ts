import express, { Express } from 'express';
import 'dotenv/config';
import router from './routes';

const server: Express = express();

server.use( express.json() );
server.use( "/", router );

export { server };