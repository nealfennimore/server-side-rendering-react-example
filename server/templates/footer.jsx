import clientConfig from '../../webpack/common/webpack.common.client.config.js';

function template(fileName){
    return `<script src="/${fileName}.js" defer></script>`;
}

const files   = Object.keys(clientConfig.entry).reverse();
const scripts = files.map(template).join('\n');

export default scripts;