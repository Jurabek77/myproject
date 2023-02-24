import React, { Component }  from 'react';
import "./Setting.scss"

function SettingNav({menus}) {
    return ( 
        <div className="settingNav nav_hidden">
         <div className="setting_navItems">
             <button onClick={()=> menus("settingProduct")} className="settingProduct btn btn_nav active">Product</button>
             <button onClick={()=> menus("bacgrounds")} className="bacgrounds btn btn_nav">bacgrounds</button>
             <img onClick={()=> menus("settingMenu")} src={require("../shoppingIcons/icons8-gear-100.png")} alt="" />
             <button onClick={()=> menus("settingsidebar")} className="settingsidebar btn btn_nav">sidebar</button>
             <button onClick={()=> menus("settingThemes")} className="settingThemes btn btn_nav">Themes</button>
         </div>
        </div>
     );
}

export default SettingNav;