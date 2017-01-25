function constructParam(name, params){
    return `${name}=${encodeURIComponent(params[name])}`;
}

export function constructParams(paramNames, params){
    return paramNames.map((name)=>constructParam(name, params)).join('&');
}

export function constructURL(path, params){
    let paramNames = Object.keys(params),
        _params    = '';

    if(paramNames.length){
        _params = `?${constructParams(paramNames, params)}`;
    }

    return `${path}${_params}`;
}