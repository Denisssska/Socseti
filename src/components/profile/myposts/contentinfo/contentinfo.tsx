import React from 'react';
import c from '../../content.module.css'


export const Contentinfo = () => {
    return (
        <div>
            <div className={c.contentImg}>
                <img
                    src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt="aaa"/>
            </div>
            <textarea className={c.textarea}/>
            <div>
                <button>Push</button>
            </div>
        </div>
    );
};
