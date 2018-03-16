import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combined from '../reducers/combined.js';

const logger = createLogger();

let store = createStore(
    combined,
    applyMiddleware(thunk,logger));

export default store;