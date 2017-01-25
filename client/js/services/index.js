import request from 'superagent';

function process({body}){
    return body;
}

export const GET = (url) => request.get(url).then(process);