import React, { Component }  from 'react';
import "./ShoppingCart.scss"

function EmptyCart() {
    return ( 
        <div className="emptyCart">
<div className="emptycard">
    <img src={require("../shoppingIcons/icons8-add-shopping-cart-100.png")} alt="" />
    <h2>Is empty</h2>
    <span>lorem ipsum dolorsi sit amet dill one redist for</span>
</div>
        </div>
     );
}

export default EmptyCart;