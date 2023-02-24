import React, { Component }  from 'react';
function SettingMenu({menus}) {
    return ( 
        <div className="centrMenu">
         <div className="setting_category">
                <img src={require("../shoppingIcons/icons8-gear-100.png")} alt="" />
                <button onClick={()=> menus("settingProduct")} className="btn">Product</button>
                <button onClick={()=> menus("bacgrounds")} className="btn">Bacgrounds</button>
                <button onClick={()=> menus("settingsidebar")} className="btn">Sidebar</button>
                <button onClick={()=> menus("settingThemes")} className="btn">Themes</button>
            </div> 
        </div>
     );
}

export default SettingMenu;