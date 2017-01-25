import path from 'path';
import fs from 'fs';

const scriptsDir = path.resolve(process.cwd(), 'server/templates/head/scripts/vendor');
let files  = [];

// Get files in lib
const filesNames = fs.readdirSync(scriptsDir);

files = filesNames
    .filter( file => /\.min\.js$/i.test(file) ) // Grab minified js files
    .map( file => fs.readFileSync(`${scriptsDir}/${file}`, 'utf8'))
    .map( file => `<script>${file}</script>`)
    .join('\n');

export default files;
