import React from 'react';
import "./ShoppingProducts.scss"

function ShoppingProducts({changeState, addLike, basketAdd, setCliked, actives}) {
let arr = [];
    const hiddenSearchCategory = () => {
       const search_category = document.querySelector(".search_category")
    if(arr.length === 0){
        search_category.style.marginRight="-28px"
        arr.push(1)
        console.log(arr.length);
        }else if(arr.length === 1){
           search_category.style.marginRight="-70px"
           arr.pop(1)
           console.log(arr.length);
        }
    }

    return (
        <div className="shopping_product">
            <div className="product_search">
                <div className="search_category d-flex align-items-center"><button onClick={hiddenSearchCategory} className="border border-0 border-end border-2 bg-transparent d-flex align-items-center" /**style={{"marginLeft": "-14px", "borderRight": "1px solid black"}} */><img  width="15" height="23" src={require("../shoppingIcons/icons8-double-left-24.png")} alt="" /></button><button onClick={()=>(setCliked("category"), actives('.category'))} className="border-0 bg-transparent"> All</button></div>
                <input className="storeSearch" placeholder="Search..." type="text" />
                <div onClick={()=>document.querySelector(".storeSearch").focus()} className="product_search_icon">
                    <img src={require("../shoppingIcons/search.png")} alt="" />
                </div>
            </div>

            <div className="shopping_product_items_body">
            {/* <div  onClick={()=>changeState('productItems')}  className="shopping_product_item"> */}
            {/* <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button onClick={()=>changeState('ProductItems')} className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">

                        <button  onClick={()=>addLike(true)}  className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>

                        <button onClick={()=>basketAdd(true)} className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div> */}

                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button  className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button  onClick={()=>changeState('liked')} className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                <div className="shopping_product_item">
                    <div className="product_item_img">
                        <img src={require("../shoppingImgs/ClassicFloralDuo-M.jpg")} alt="" />
                    </div>
                    <button className="product_item_price">120.5$</button>
                    <div className="product_item_text">
                        <div className="product_item_texts">
                            <h4>Qora sham</h4>
                            <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                        </div>
                        <div className="product_item_indicators">
                            <div className="product_item_positive"><img src={require("../shoppingIcons/icons8-star-64.png")} alt="" /> 4.0</div>
                            <div className="product_item_purchased"><img src={require("../shoppingIcons/icons8-download-64.png")} alt="" /> 1,355</div>
                        </div>
                    </div>
                    <div className="shopping_product_btns">
                        <button className="btn_item"><img src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                        <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default ShoppingProducts;