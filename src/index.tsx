import reportWebVitals from './reportWebVitals';
import store from "./reduxe/state";
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>

            <App profileObj={store._state.profileObj}
                 dialogData={store._state.dialogData}
                 sideBar={store._state.sideBar}
                 addPost={store.addPost.bind(store)}
                 changeFromPost={store.changeFromPost.bind(store)}
                 newMessageFromPost={store._state.newMessageFromPost}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)

reportWebVitals();
