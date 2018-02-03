
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import logger from 'redux-logger';
import configureStore from './store/configureStore';
import App from './App';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
