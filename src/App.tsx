import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {Content} from "./components/profile/content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/dialogs/dialogs";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import {Friends} from "./components/friends/friends";
import {StoreType} from "./reduxe/state";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = ({store}) => {
    const state = store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-all'>
                    <Routes>
                        <Route path={'/content/*'}
                               element={<Content postObj={state.profileObj}
                                                 dispatch={store.dispatch.bind(store)}
                                                 newMessageFromPost={state.newMessageFromPost}
                               />}
                        />
                        <Route path={'/dialogs/*'} element={<Dialogs dialogData={state.dialogData}
                                                                     dispatch={store.dispatch.bind(store)}
                                                                     newMessageFromPost={state.newMessageFromPost}
                        />}
                        />
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/friends/*'} element={<Friends sideBar={state.sideBar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
