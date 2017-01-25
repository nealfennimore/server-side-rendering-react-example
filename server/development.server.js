import express from 'express';
import config from '../config';
import handleRouting from './routing';

const app = express();

// Since the asset and HMR json files are not actually in the filesystem
// 404 to allow to be pointed into the development upstream on nginx
app.get(/(\.js(on)?|\.css|\.ico|\.svg|\.png|\.jp(e)?g|\.gif|\.ttf|\.otf|\.woff(2)?)$/, (req, res)=>res.sendStatus(404));

app.get('*', handleRouting);

app.listen(config.server.port, config.server.ip, ()=> {
    console.log('Development server started on', `${config.server.ip}:${config.server.port}`);
});