import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducers/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //please integrate this with store;
const store = createStore(reducers, applyMiddleware(thunk))

window.store = store;
export default store;
