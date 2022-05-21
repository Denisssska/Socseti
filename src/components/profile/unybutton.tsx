import React from 'react';

type ButtonType ={
    name:string,
    callback:()=>void
    className:string
}
export const Unybutton =(props:ButtonType)=>{
    const OnclickFun = ()=>{
        return(props.callback()
        )
    }
    return(
        <div>
            <button className={props.className} onClick={OnclickFun}>{props.name}</button>
        </div>
    )
}