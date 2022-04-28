import React from 'react';
import c from './dialogs.module.css';
import Dialog from "./dialog/dialog";

export type DialogsDataType ={
    message:string,
    id:string,
    name:string
}
export type ArrayDialogsDataType={
    dialogData:Array<DialogsDataType>
}
export const Dialogs = (props:ArrayDialogsDataType) => {

    let dialogArr = props.dialogData.map((item)=><Dialog message={item.message} id={item.id} name={item.name}/>)
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsName}>
                {dialogArr}
            </div>

        </div>

    )
}