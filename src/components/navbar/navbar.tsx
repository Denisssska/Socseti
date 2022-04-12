import React from 'react';
import c from './navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = ()=>{

 //let Inactive = ({isActive})=>(isActive? ' active' : '')
    return(
        <nav className={c.nav}>
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

        </nav>
    )
}