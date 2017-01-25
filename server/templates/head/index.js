import title from './title';
import meta from './meta';
import scripts from './scripts';
import styles from './styles';

import { getPage } from '../../utils/page';

export default function head(args){
    const page = getPage(args);
    let _args = Object.assign({page}, args);

    return `
        <head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            ${title(_args)}
            ${meta(_args)}
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${styles}
            ${scripts}
        </head>
    `;
}