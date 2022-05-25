import React from 'react';
import c from './post.module.css';


type PostObjType = {
    likes: number
    id:string
    message:string
}
export const Post = (props: PostObjType) => {
    return (
            <div className={c.posts} style={{


            }}>
                <div>
                    <img className={c.face}
                         src="https://discordgid.ru/wp-content/uploads/2020/06/fon-diskord.jpg"
                         alt=""/>
                    <span className={c.text}>{props.message}</span>

                    <div className={c.likes}><span className={c.like}>like:{props.likes}</span></div>
                </div>
            </div>
    )
}