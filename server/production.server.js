import express from 'express';
import config from '../config';
import handleRouting from './routing';

const app = express();

app.get('*', handleRouting);

app.listen(config.server.port, ()=>{
    console.log('Starting production server', config.server.port);
});