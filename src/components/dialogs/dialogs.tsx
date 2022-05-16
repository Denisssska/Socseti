import React, {ChangeEvent} from 'react';
import c from './dialogs.module.css';
import Dialog from "./dialog/dialog";
import {Unybutton} from "../profile/unybutton";
import { AddMessageActionCreater,  UpdateNewPostActionCreater} from "../../reduxe/dialogs-reducer";
import {ActionsType, DialogDataType} from "../../reduxe/store";


export type DialogsDataType={
    dialogData:Array<DialogDataType>
    dispatch:(action:ActionsType)=>void
    newMessageFromDialog:string
}
export const Dialogs:React.FC<DialogsDataType> = ({newMessageFromDialog,dispatch,dialogData}) => {


    const addPost = () => {
        let actionAdd =AddMessageActionCreater()
        dispatch(actionAdd)
        let actionUpdate = UpdateNewPostActionCreater('')
        dispatch(actionUpdate)
        // props.addPost()
        // props.changeFromPost('')
    }

    const changeFromPost=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessage = event.currentTarget.value
        if(newMessage){
            let action = UpdateNewPostActionCreater(newMessage)
            dispatch(action)
        }

    }

    let dialogArr = dialogData.map((item)=><Dialog message={item.message} id={item.id} name={item.name}/>)
    return (

        <div className={c.dialogs}>

            <div className={c.dialogsName}>

            <textarea value={newMessageFromDialog} onChange={changeFromPost}   className={c.textarea}/>

                <Unybutton callback={addPost} name='Push'/>
                {dialogArr}
            </div>

        </div>

    )
}