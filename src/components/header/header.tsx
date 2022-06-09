import React from 'react';
import c from './header.module.css';
import {NavLink} from "react-router-dom";
import {DataType} from "../../reduxe/authReducer";
type HeaderTypeProps = {
    data:DataType
    isAuth:boolean

}
const Header:React.FC<HeaderTypeProps> = ({data,isAuth}) => {
    console.log(data.login)
    return(
        <header className={c.header} >
            <img src="https://logos.flamingtext.com/Word-Logos/a-design-china-name.png" alt="logo"/>
            <div className={c.loginBlock}>
                {isAuth?<div className={c.name}>{data.login}</div>:<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header >
    )
}
export default Header