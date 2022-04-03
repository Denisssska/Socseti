import React from 'react';

import './App.css';
import Header from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {Content} from "./components/profile/content";


function App() {

  return (
    <div className='app-wrapper'>
     <Header/>
      <Navbar/>
      <Content/>

    </div>
  );
}

export default App;
