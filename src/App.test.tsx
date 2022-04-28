import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import store from "./reduxe/state";

test('renders learn react link', () => {
    render(
        <App profileObj={store._state.profileObj}
             dialogData={store._state.dialogData}
             sideBar={store._state.sideBar}
             addPost={store.addPost.bind(store)}
             changeFromPost={store.changeFromPost.bind(store)}
             newMessageFromPost={store._state.newMessageFromPost}/>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
