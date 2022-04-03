import React from 'react';
import c from './dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsName}>
                <div><NavLink to='/sasha' className={c.name}>Sasha</NavLink>
                </div>
                <div><NavLink to='/pasha' className={c.name}>Pasha</NavLink>
                </div>
                <div><NavLink to='/masha' className={c.name}>Masha</NavLink>
                </div>
                <div><NavLink to='/dasha' className={c.name}>Dasha</NavLink>
                </div>
                <div><NavLink to='/ira' className={c.name}>Ira</NavLink>
                </div>
            </div>
            <div className={c.dialogMessage}>
                <div className={c.message}>HI</div>
                <div className={c.message}>Hey</div>
                <div className={c.message}>Why</div>
                <div className={c.message}>By</div>
                <div className={c.message}>Why</div>
                <div className={c.message}>My</div>
            </div>
        </div>
    )
}