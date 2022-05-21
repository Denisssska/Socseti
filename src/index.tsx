import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import store from "./reduxe/redux-store";
import {Provider} from "react-redux";

    ReactDOM.render(

            <Provider store={store}>
            <App/>
            </Provider>,

        document.getElementById('root')
    );

reportWebVitals();
