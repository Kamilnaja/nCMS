import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import setAuthorizationToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { jwtDecode } from 'jwt-decode';
import { setUser } from './actions/authActions';

if (localStorage.jwtToken) {
    setUser();
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();