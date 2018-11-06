import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setUser } from './actions/authActions';
import App from './App';
import './assets/styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import store from './reducers/store';

// todo - change this 
if (localStorage.jwtToken && localStorage.jwtToken !== 'string') {
    setUser();
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();