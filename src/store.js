import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import Area from './Reducers/Area';
import Settings from './Reducers/Settings';
import Snake from './Reducers/Snake';
import Game from './Reducers/Game';

const Reducers = combineReducers({ Area,Settings,Snake,Game });

const Middlewares = applyMiddleware(ReduxThunk)
const Store = createStore(Reducers, composeWithDevTools(Middlewares));


export default Store;