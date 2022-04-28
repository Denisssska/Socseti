import React from 'react';
import c from './post.module.css';


type PostObjType = {
    likes: number
    id:string
    message:string
}
export const Post = (props: PostObjType) => {
    return (
            <div className={c.posts}>
                <div>
                    <img className={c.face}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm--0sWWVwceme4xAT5CV6DVoxBPfS_hxgg&usqp=CAU"
                         alt=""/>
                    <span className={c.text}>{props.message}</span>

                    <div className={c.likes}><span className={c.like}>like:{props.likes}</span></div>
                </div>
            </div>
    )
}