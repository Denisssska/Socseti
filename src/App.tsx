import React from 'react';

import './App.css';
import Header from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {Content} from "./components/profile/content";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/dialogs/dialogs";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";


function App() {

    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-all'>
                    <Routes>
                        <Route path={'/content'} element={<Content/>}/>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>

                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default App;
