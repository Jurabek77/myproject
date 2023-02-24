import React, { Component }  from 'react';
import Home from '../BasicPages/HomePages/Home'
import AboutPage from './AboutPages/AboutPage';
import CategoryPage from './Category/CategoryPage';
import ContactsPage from './Contects/ContactsPage';
import NavbarHome from './HomePages/HomeComponents/NavbarHome';
import LocationPage from './Location/LocationPage';
import MessagesPage from './MessagePage/MessagesPage';

function BasicMain() {
    let btns = document.querySelectorAll("button")
    btns.forEach(ite => ite.classList.add("active"))
    
    return ( 
        <div className='basicMain'>
            <div className="navbHome">
        <NavbarHome />
        </div>
            <Home />
            <CategoryPage />
            <AboutPage />
            <ContactsPage />
            <LocationPage />
            <MessagesPage />
        </div>
     );
}

export default BasicMain;