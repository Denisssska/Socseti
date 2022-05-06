import React from 'react';
import c from './content.module.css'
import {Post} from "./myposts/post/post";
import {Contentinfo} from "./myposts/contentinfo/contentinfo";
import {ActionsType, ProfileObjType} from "../../reduxe/state";


type ArrayPost = {
    newMessageFromPost: string
    postObj: Array<ProfileObjType>
    dispatch: (action: ActionsType) => void
}
export const Content: React.FC<ArrayPost> = ({newMessageFromPost, postObj, dispatch}) => {

    let posts = postObj.map((item) => <Post key={item.id} id={item.id} message={item.message} likes={item.likes}/>)
    return (
        <div className={c.content}>
            <Contentinfo
                newMessageFromPost={newMessageFromPost}
                dispatch={dispatch}
            />
            {posts}
        </div>
    )
}