import React from 'react';
import c from './navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = ()=>{

    return(
        <nav className={c.nav} style={{
            backgroundImage: `url("https://kartinkin.net/uploads/posts/2021-07/thumbs/1625579398_18-kartinkin-com-p-svyaz-fon-krasivie-foni-19.jpg")`,
            backgroundRepeat:'no-repeat',

        }}>
            <div>
                <NavLink to='/content'>Content</NavLink>
            </div>
            <div>
                <NavLink  className={({ isActive }) =>(isActive ? " active" : "")} to='/dialogs'>Dialogs</NavLink>
            </div>
            <div>
                <NavLink style={({ isActive }) =>({backgroundColor: isActive ? 'white' : ''})} to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink style={({ isActive }) =>({backgroundColor: isActive ? 'white' : ''})} to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink style={({ isActive }) =>({backgroundColor: isActive ? 'white' : ''})} to='/settings'>Settings</NavLink>
            </div>
            <div>
                <NavLink style={({ isActive }) =>({backgroundColor: isActive ? 'white' : ''})} to='/friends'>Friends</NavLink>
                <div className={c.friend}><div>+</div></div>

            </div>

        </nav>
    )
}