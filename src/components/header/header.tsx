import React from 'react';
import c from './header.module.css';
const Header = () => {
    return(
        <header className={c.header} style={{
            backgroundImage: `url("https://kartinkin.net/uploads/posts/2021-07/thumbs/1625579392_23-kartinkin-com-p-svyaz-fon-krasivie-foni-24.jpg")`,
            backgroundRepeat:'no-repeat',

        }}>
            <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt="logo"/>
        </header >
    )
}
export default Header