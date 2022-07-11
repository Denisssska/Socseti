import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import {FriendsContainer} from "./components/friends/friendsContainer";
import {
    ContentInfoContainer,
    ParamsType
} from "./components/profile/myposts/contentinfo/ContentInfoContainer";
import {DialogsContainer} from "./components/dialogs/dialogsContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import HookForm from "./components/login/HookForm";
import {connect} from "react-redux";

import {StateAppType} from "./redux/redux-store";
import {initializedTC} from "./redux/appReducer";
import {compose} from "redux";
import {Preloader} from "./components/preloader/Preloader";

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializedTC: () =>void
}

class App extends React.Component<MapStatePropsType & MapDispatchToProps & ParamsType> {
    componentDidMount() {
        this.props.initializedTC()
    }


    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
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
}

const mapStateToProps = (state: StateAppType): MapStatePropsType => {
    return {
        initialized: state.initialized.initialized
    }
}
const withRouter = () => (props: MapStatePropsType & MapDispatchToProps) => {
    const params = useParams();
    return (
        <App
            {...props}
            params={params}
        />
    );
};
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializedTC}),
    withRouter
)(App)

