import React from 'react';
import c from './dialogs.module.css';

import Dialog from "./dialog/dialog";

export const Dialogs = () => {
  let dialogData = [
      {message:'hi', id:'1', name:'Sasha'},
      {message:'hey', id:'2', name:'Pasha'},
      {message:'by', id:'3', name:'Pasha'},
      {message:'my', id:'4', name:'Masha'}
  ]
    let dialogarr = dialogData.map((item:{message:string, id:string, name:string})=><Dialog message={item.message} id={item.id} name={item.name}/>)
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsName}>
                {dialogarr}
            </div>

        </div>

    )
}