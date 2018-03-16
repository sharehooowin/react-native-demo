import {combineReducers} from 'redux';
import {count} from './MyReducers.js';

let reducers = {
  counter:count
}

const combined = combineReducers({...reducers});

export default combined;
