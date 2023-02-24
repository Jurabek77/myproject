import React, { Component }  from 'react';
function CategoryItems() {
    return ( 
        <div className="category__items">
            <div className="category__items__line">
            <div className="category__item">
                <div className="category__items_imgs">
                    <img src={require("./categoryImg/flower-pot.png")} alt="flower-pot" />
                </div>
                <div className="category-item-text">
                <h2>Flowers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipi.</p>
                </div>
            </div>
            </div>
        </div>
     );
}

export default CategoryItems;