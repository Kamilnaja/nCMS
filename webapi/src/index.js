import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import { createLogger } from 'redux-logger';
import { settingsReducer } from './reducers/settingsReducer';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();