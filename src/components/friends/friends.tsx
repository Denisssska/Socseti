import React from 'react';
import c from './friends.module.css'

type SIdeBarType={
    name:string
    surname:string
}
type ArrayPost={
    sideBar:Array<SIdeBarType>
}

export const Friends = (props:ArrayPost) => {
    return (

        <div className={c.friends}>
            {props.sideBar.map((item)=><div><span>{item.name}</span><span>{item.surname}</span></div>)}
        </div>
    );
};
