import React, {ChangeEvent} from 'react';
import c from './dialogs.module.css';
import Dialog from "./dialog/dialog";
import {Unybutton} from "../profile/unybutton";
import {DialogDataType} from "../../reduxe/dialogs-reducer";




export type DialogsDataType = {
    dialogData: Array<DialogDataType>
    addPost: () => void
    changeFromPost: (value:string) => void
    newMessageFromDialog: string
}
export const Dialogs: React.FC<DialogsDataType> = ({newMessageFromDialog,
                                                       dialogData,
                                                       addPost,
                                                       changeFromPost}) => {

    const addPostDialog = () => {
        addPost()
    }
    const changeFromPostDialog = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeFromPost(event.currentTarget.value)
    }
    let dialogArr = dialogData.map((item) => <Dialog key={item.id} message={item.message} id={item.id} name={item.name}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsName}>
                <textarea value={newMessageFromDialog} onChange={changeFromPostDialog} className={c.textarea}/>
                <Unybutton callback={addPostDialog} name='Push'/>
                {dialogArr}
            </div>
        </div>

    )
}