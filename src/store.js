import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import Settings from './Reducers/Settings';

const Reducers = combineReducers({ Settings });

const Middlewares = applyMiddleware(ReduxThunk)
const Store = createStore(Reducers, composeWithDevTools(Middlewares));


export default Store;