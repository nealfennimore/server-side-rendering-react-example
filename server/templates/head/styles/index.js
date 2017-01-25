import path from 'path';
import fs from 'fs';
import includes from 'lodash/includes';
import clientConfig from '../../../../webpack/common/webpack.common.client.config.js';
import { isDevelopment } from 'shared/env';

let files = isDevelopment ? '' : [];

// Stylesheets are injected by the style-loader in development
if(!isDevelopment){
    const cssFiles = Object.keys(clientConfig.entry).reverse().map( name => `${name}.css`);
    const publicDir = path.resolve(process.cwd(), 'public');
    const filesNames = fs.readdirSync(publicDir);

    files = filesNames
        .filter( file => includes(cssFiles, file) ) // Grab minified js files
        .map( file => fs.readFileSync(`${publicDir}/${file}`, 'utf8'))
        .map( file => `<style>${file}</style>`)
        .join('\n');
}

export default files;