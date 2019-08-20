import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';

import Init from './Components/Init';

import './Styles/root.css';
import './Styles/reset.css';
import './Styles/unic.css';

ReactDOM.render(
    <Provider store={store}>
        <Init />
    </Provider>
, document.getElementById('root'));
