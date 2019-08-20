import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import Area from './Reducers/Area';
import Settings from './Reducers/Settings';

const Reducers = combineReducers({ Area,Settings });

const Middlewares = applyMiddleware(ReduxThunk)
const Store = createStore(Reducers, composeWithDevTools(Middlewares));


export default Store;