import React from 'react';
import c from './navbar.module.css'

export const Navbar = ()=>{
    return(
        <nav className={c.nav}>
            <div>
                <a className={c.profile} href='/#'>Profile</a>
            </div>
            <div>
                <a href='/#'>Message</a>
            </div>
            <div>
                <a href='/#'>News</a>
            </div>
            <div>
                <a href='/#'>Music</a>
            </div>
            <div>
                <a href='/#'>Settings</a>
            </div>

        </nav>
    )
}