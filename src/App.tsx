import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Recruit from "./Recruit/Recruit";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

const App = () => {
  return(
      <div className='App'>
        <Header />
        <Main />
        <Skills />
        <Works />
        <Recruit />
        <Contacts />
        <Footer />
      </div>
  )
}

export default App;
