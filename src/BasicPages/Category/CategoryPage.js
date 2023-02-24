import React, { Component }  from 'react';
import './CategoryPage.scss'
import '../HomePages/Home.scss'
import CategoryItems from './CategoryItems';

function CategoryPage() {
    return (
        <div className='CategoryPage'>
            <div className="categorybg">
                <div className="circles">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                    <div className="circle5"></div>
                    <div className="circle6"></div>
                    <div className="circle7"></div>
                    <div className="circle8"></div>
                </div>
            </div>
            <div className="Category__body container">
            <div className='category__title'>
              <h3>CATEGORY PRODUCT</h3>
            </div>
            <div className="d-flex justify-content-between">
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            </div>
            <div className=" category__line2 d-flex justify-content-between">
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            <CategoryItems />
            </div>
            </div>
        </div>
    );
}

export default CategoryPage;