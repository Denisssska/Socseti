import reportWebVitals from './reportWebVitals';
import store from "./reduxe/state";
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

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
