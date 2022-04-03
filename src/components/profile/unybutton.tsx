import React from 'react';

type ButtonType ={
    name:string,
    callback:()=>void
}
export const Unybutton =(props:ButtonType)=>{
    const OnclickFun = ()=>{
        return(props.callback()
        )
    }
    return(
        <div>
            <button onClick={OnclickFun}>{props.name}</button>
        </div>
    )
}