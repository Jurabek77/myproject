import React, { Component }  from 'react';
import CategoryItems from "../../BasicPages/Category/CategoryItems";
import "./Categories.scss"

function Categories() {
    return ( 
        <div className='Categories'>
            <div className='category__title'>
              <h3>CATEGORY PRODUCT</h3>
            </div>
            <div className="d-flex mt-4 pt-2 justify-content-between">
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            </div>
            <div className=" category__line2 mt-4 d-flex justify-content-between">
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            </div>
        </div>
     );
}

export default Categories;