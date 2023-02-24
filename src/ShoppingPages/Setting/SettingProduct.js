import React, { Component }  from 'react';
import "./Setting.scss"

function SettingProduct() {
    return ( 
        <div className="settingProduct">
            <div className="settingProduct_title">
                <h2 className="border-bottom">Product Viewer</h2>
            </div>
            <div className="product_view">
                category__items
            </div>
            <div className="settingProduct_title">
                <h2 className="border-bottom">Change money</h2>
            </div>
            <div className="price_category">
                categoy_price
            </div>
        </div>
     );
}

export default SettingProduct;