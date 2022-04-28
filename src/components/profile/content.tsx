import React from 'react';
import c from './content.module.css'
import {Post} from "./myposts/post/post";
import {Contentinfo} from "./myposts/contentinfo/contentinfo";


export type ProfileObjType = {
    id: string
    message: string
    likes: number
}
type ArrayPost={
    newMessageFromPost:string
    postObj:Array<ProfileObjType>
    addPost:()=>void
    changeFromPost:(text:string)=>void
}
export const Content = (props:ArrayPost) => {

    let posts = props.postObj.map((item) =><Post key={item.id} id={item.id} message={item.message} likes={item.likes}/>)
    return (
        <div className={c.content}>
            <Contentinfo
                newMessageFromPost={props.newMessageFromPost}
                addPost={props.addPost}
                changeFromPost={props.changeFromPost}
            />
            {posts}
        </div>
    )
}