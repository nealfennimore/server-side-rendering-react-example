import { GET } from 'services';

export const REQUEST_HOME = 'REQUEST_HOME';
export function requestHome(){
    return { type: REQUEST_HOME };
}

export const RECEIVE_HOME = 'RECEIVE_HOME';
export function receiveHome(data){
    return { type: RECEIVE_HOME, data };
}

export function fetchHomeData(){
    return (dispatch) => {
        dispatch(requestHome());

        GET('/example')
            .then((res)=>{
                dispatch(receiveHome(res));
            });
    };
}

