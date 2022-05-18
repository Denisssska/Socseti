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
export const ContentInfo: React.FC<ContentInfoType> = ({profileObj,
                                                           newMessageFromPost,
                                                           changePost,
                                                           addPostText}) => {

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
        <div>
            <div className={c.contentImg}>
                <img
                    src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt="aaa"/>
            </div>
            <textarea value={newMessageFromPost} onChange={changeFromPost} className={c.textarea}/>
            <div>
                <Unybutton callback={addPost} name='Push'/>
            </div>
            {posts}
        </div>
    );
};
