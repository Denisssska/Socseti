import React from 'react';
import c from '../../content.module.css'
import {Unybutton} from "../../unybutton";
import { AddPostTextActionCreater, UpdateNewPostActionCreater} from "../../../../reduxe/Content-reducer";
import {ActionsType} from "../../../../reduxe/store";

type ContentInfoType = {
    dispatch:(action:ActionsType)=>void
    newMessageFromPost:string
}

export const Contentinfo:React.FC<ContentInfoType> = ({dispatch,newMessageFromPost}) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let actionAdd =AddPostTextActionCreater()
        dispatch(actionAdd)
        let actionUpdate = UpdateNewPostActionCreater('')
        dispatch(actionUpdate)
            // props.addPost()
            // props.changeFromPost('')
    }

    const changeFromPost=()=>{
        let newText = newPostElement.current?.value
        if(newText){
            let action = UpdateNewPostActionCreater(newText)
          dispatch(action)

        }
    }
    return (
        <div>
            <div className={c.contentImg}>
                <img
                    src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt="aaa"/>
            </div>
            <textarea value={newMessageFromPost} onChange={changeFromPost} ref={newPostElement}  className={c.textarea}/>
            <div>
                <Unybutton callback={addPost} name='Push'/>
            </div>
        </div>
    );
};
