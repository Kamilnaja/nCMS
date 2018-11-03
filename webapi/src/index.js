import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { setUser } from './actions/authActions';

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