import React from 'react';
import c from './header.module.css';
import { NavLink} from "react-router-dom";
import {DataType} from "../../redux/authReducer";

type HeaderTypeProps = {
    data:DataType
    isAuth:boolean

}
const Headers:React.FC<HeaderTypeProps> = ({data,isAuth}) => {
    return(
        <header className={c.header} >
            <img src="https://logos.flamingtext.com/Word-Logos/a-design-china-name.png" alt="logo"/>
            <div className={c.loginBlock}>
                {isAuth? <>
                    <div className={c.name}>{data.login}</div>
                </>: <NavLink to={'/login'}>Login</NavLink>}
                {/*{isAuth&&<Navigate to={'/content'}/>}*/}
            </div>
        </header >
    )
}
export const Header = React.memo(Headers)