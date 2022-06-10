import React from 'react';

type ButtonType ={
    name:string,
    callback:()=>void
    className:string
    disabled?:boolean
}
export const Unybutton =(props:ButtonType)=>{
    const OnclickFun = ()=>{
        return(props.callback()
        )
    }
    return(
        <div>
            <button disabled={props.disabled} className={props.className} onClick={OnclickFun}>{props.name}</button>
        </div>
    )
}