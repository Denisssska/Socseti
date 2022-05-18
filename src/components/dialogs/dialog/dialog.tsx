import React from 'react';
import c from './dialog.module.css';
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string,
    id: string
    message: string

}
export const Dialog = (props: DialogsPropsType) => {

    return (
        <div>

            <span>
                <NavLink className={c.name} to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </span>

            <span className={c.dialogMessage}>
               <span className={c.message}>{props.message}</span>
           </span>

        </div>
    );
};

export default Dialog;