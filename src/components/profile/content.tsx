import React, {useState} from 'react';
import c from './content.module.css'
import {Post} from "./myposts/post/post";


export const Content = () => {
    let [area, setArea] = useState('')
    let Changehandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setArea(event.target.value)
    }
    return (
        <div className={c.content}>
            <div className={c.contentImg}>
                <img
                    src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt="aaa"/>
            </div>
            <textarea className={c.textarea} onChange={Changehandle}/>
            <div>
                <button>Push</button>
            </div>
            <div>{area}</div>
            <Post name={"WTF"} likes={'23'}/>
            <Post name={"WTF"} likes={'23'}/>
            <Post name={"WTF"} likes={'23'}/>

        </div>
    )
}