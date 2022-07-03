import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import {FriendsContainer} from "./components/friends/friendsContainer";
import {ContentInfoContainer} from "./components/profile/myposts/contentinfo/ContentInfoContainer";
import {DialogsContainer} from "./components/dialogs/dialogsContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import HookForm from "./components/login/HookForm";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-all'>
                    <Routes>

                        <Route path={'/content/'} element={<ContentInfoContainer/>}>
                            <Route path={'/content/:userId'} element={<ContentInfoContainer/>}/>
                        </Route>
                        <Route path={'/login/*'} element={<HookForm/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/friends/*'} element={<FriendsContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
