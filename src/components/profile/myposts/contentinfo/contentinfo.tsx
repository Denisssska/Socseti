import React, {ChangeEvent} from 'react';
import c from '../../content.module.css'
import {Unybutton} from "../../unybutton";
import {Post} from "../post/post";
import {ProfileObjType} from "../../../../reduxe/Content-reducer";

type ContentInfoType = {
    changePost: (newText: string) => void
    addPostText: () => void
    newMessageFromPost: string
    profileObj: Array<ProfileObjType>
}
export const ContentInfo: React.FC<ContentInfoType> = ({
                                                           profileObj,
                                                           newMessageFromPost,
                                                           changePost,
                                                           addPostText
                                                       }) => {

    let posts = profileObj.map((item) => <Post key={item.id} id={item.id}
                                               message={item.message}
                                               likes={item.likes}/>)
    const addPost = () => {
        addPostText()
    }
    const changeFromPost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        changePost(newText)
    }
    return (
        <div className={c.face}>
            <div className={c.contentImg}>
                <img
                    src="https://kartinkin.net/uploads/posts/2020-07/1593792591_33-p-fon-brawl-stars-57.jpg"
                    alt="aaa"/>
            </div>
            <textarea value={newMessageFromPost} onChange={changeFromPost} className={c.textarea}/>
            <div>
                <Unybutton callback={addPost} name='Push' className={c.yellow}/>
            </div>
            {posts}
        </div>
    );
};
