import { GET } from 'services';
import config from '../config';
import { constructURL } from 'shared/url';
import { isBrowser } from 'shared/env';

export function getAPIRootPath(){
    const host = isBrowser ? '' : `${config.server.protocol}://${config.server.hostname}`;
    return `${host}/api`;
}

export function fetcher({
    path='',
    id='',
    params={}
}){
    if(id){ id = `/${id}`; }
    const endpoint = `${getAPIRootPath()}/${path}${id}`;
    return GET(constructURL(endpoint, params));
}