import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import store from "./reduxe/redux-store";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)

reportWebVitals();
