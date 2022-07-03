import React from 'react';
import c from './dialogs.module.css';
import {Dialog} from "./dialog/dialog";
import {DialogDataType} from "../../redux/dialogs-reducer";
import {AddDialogsForm} from "./AddDialogsForm";

export type DialogsDataType = {
    dialogData: Array<DialogDataType>
    newMessageFromDialog: string
    isAuth: boolean
}

 const DialogsSecret: React.FC<DialogsDataType> = ({dialogData}) => {

    let dialogArr = dialogData.map((item) => <Dialog key={item.id} message={item.message} id={item.id}
                                                     name={item.name}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsName}>
                <AddDialogsForm/>
                {dialogArr}
            </div>
        </div>

    )
}
 export const Dialogs = React.memo(DialogsSecret)
