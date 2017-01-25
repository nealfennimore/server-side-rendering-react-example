import { compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {browserHistory} from 'react-router';
import { isDevelopment, isBrowser } from 'shared/env';

// Add in redux dev tools when in development
const reduxDevtoolsCompose    = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const composeEnhancers = isDevelopment && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

const defaultMiddleware = [
    routerMiddleware(browserHistory),
    thunk
];

const middleware = isDevelopment ? [
    require('redux-immutable-state-invariant')(),
    ...defaultMiddleware
] : defaultMiddleware;

export default middleware;