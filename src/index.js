import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import contactsReducer from './store/reducers/contacts-reducer';
import newContReducer from './store/reducers/newContacts-reducer';
import thunkMiddleWare from 'redux-thunk';


import './index.css';
import App from "./App";

const rootReducer = combineReducers({
    contactsReducer: contactsReducer,
    newContReducer: newContReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
);

const app = (
   <Provider store={store}>
       <BrowserRouter>
           <App/>
       </BrowserRouter>
   </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
