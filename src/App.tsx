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


export type SideBarType = {
    name: string
    surname: string
    photo: string
}
export type DialogDataType = {
    message: string
    id: string
    name: string
}
export type ProfileObjType = {
    id: string
    message: string
    likes: number
}
export type StateType = {
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
    dialogData: Array<DialogDataType>
    sideBar: Array<SideBarType>
    addPost: () => void
    changeFromPost: (text: string) => void
}

function App(props: StateType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-all'>
                    <Routes>
                        <Route path={'/content/*'}
                               element={<Content postObj={props.profileObj}
                                                 addPost={props.addPost}
                                                 changeFromPost={props.changeFromPost}
                                                 newMessageFromPost={props.newMessageFromPost}
                               />}
                        />
                        <Route path={'/dialogs/*'} element={<Dialogs dialogData={props.dialogData}/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/friends/*'} element={<Friends sideBar={props.sideBar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
