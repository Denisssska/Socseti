import React, {useState} from 'react';
import c from './post.module.css';



type PostType={
    name:string,
    likes:string
}
export const Post = (props:PostType)=>{
let [check,setCheck]= useState('hello')
    const Checkedfun =(event:React.ChangeEvent<HTMLInputElement>)=>{
 setCheck(event.target.value)
    }
    return(
            <div className={c.posts}>
                <input onChange={Checkedfun}/>
               <div><button>Push</button></div>
               <div>
                   <img className={c.face} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm--0sWWVwceme4xAT5CV6DVoxBPfS_hxgg&usqp=CAU" alt=""/>
                   <span>{check}</span>

                   <div><span className={c.like}>like:{props.likes}</span><span>dislike</span></div>
               </div>

            </div>
    )
}