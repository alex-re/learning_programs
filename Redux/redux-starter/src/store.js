import { createStore } from 'redux';
import reducers from './reducer';

const store = createStore(reducer);

export default store;