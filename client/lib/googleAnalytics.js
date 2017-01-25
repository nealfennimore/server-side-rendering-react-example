import ReactGA from 'react-ga';
import config from 'client/clientConfig';
import { isBrowser } from 'shared/env';

if(isBrowser){
    ReactGA.initialize(config.google.analytics);
}

export function logPageView(){
    if(isBrowser){
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }
}
