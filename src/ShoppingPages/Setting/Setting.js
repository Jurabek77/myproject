import React, { Component }  from 'react';
import { useState } from "react";
import Bacgrounds from "./Bacgrounds";
import "./Setting.scss"
import SettingMenu from "./SettingMenu";
import SettingNav from "./SettingNav";
import SettingProduct from "./SettingProduct";
import SettingSidebar from "./SettingSidebar";
import SettingThemes from "./SettingThemes";

function Setting() {
    const [menuse, setMenuse] = useState("settingMenu")

    const menus =(param)=>{
    for(let i=0; i<4; i++) document.getElementsByClassName("btn_nav")[i].classList.remove("active")
    document.querySelector(".settingNav").classList.remove("nav_hidden") 
    if(param == 'settingProduct'){
      console.log(param);
      setMenuse(param)
      document.querySelector(`.${param}`).classList.add("active")
    }
    if(param == 'bacgrounds'){
      console.log(param);
      setMenuse(param)
        document.querySelector(`.${param}`).classList.add("active")
      }
      if(param == 'settingsidebar'){
        setMenuse(param)
        document.querySelector(`.${param}`).classList.add("active")
      }
      if(param == 'settingThemes'){
        setMenuse(param)
        document.querySelector(`.${param}`).classList.add("active")
      }
      if(param == "settingMenu"){
        setMenuse(param)
        document.querySelector(".settingNav").classList.add("nav_hidden") 
      }
}

    return ( 
        <div className="Pagesetting">
            <SettingNav menus={menus} />
            <div className="settingBodys">
{menuse=='settingProduct' ? <SettingProduct /> : null}
{menuse=='bacgrounds' ? <Bacgrounds /> : null}
{menuse=='settingsidebar' ? <SettingSidebar /> : null}
{menuse=='settingThemes' ? <SettingThemes /> : null}
{menuse=='settingMenu' ? <SettingMenu menus={menus} /> : null}
            </div>
        </div>
     );
}

export default Setting;