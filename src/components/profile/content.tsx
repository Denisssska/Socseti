import React from 'react';
import c from './content.module.css'
import {Post} from "./myposts/post/post";
import {Contentinfo} from "./myposts/contentinfo/contentinfo";


export const Content = () => {

    let postData = [
        {name:'what', likes:'21'},
        {name:'that', likes:'2'},
        {name:'why', likes:'12'}
    ]
    let posts = postData.map((item:{likes:string, name:string})=><Post name={item.name} likes={item.likes}/>)
    return (
        <div className={c.content}>
            <Contentinfo/>
            {posts}
        </div>
    )
}