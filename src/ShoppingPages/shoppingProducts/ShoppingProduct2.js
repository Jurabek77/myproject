import React, { Component }  from 'react';
import "./ShoppingProducts.scss"

function ShoppingProduct2({changeState, addLike, basketAdd, setCliked, actives}) {
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
                <div className="search_category d-flex align-items-center"><button onClick={hiddenSearchCategory} className="border border-0 border-end border-2 bg-transparent d-flex align-items-center"style={{"marginLeft": "-14px", "borderRight": "1px solid black"}}><img className=""  width="15" height="23" src={require("../shoppingIcons/icons8-double-left-24.png")} alt="" /></button><button onClick={()=>(setCliked("category"), actives('.category'))} className="border-0 bg-transparent"> All</button></div>
                <input className="storeSearch" placeholder="Search..." type="text" />
                <div onClick={()=>document.querySelector(".storeSearch").focus()} className="product_search_icon">
                    <img src={require("../shoppingIcons/search.png")} alt="" />
                </div>
            </div>

        <div className="basketItemsBody">
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div  onClick={()=>changeState('ProductItems')} className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button onClick={()=>addLike(true)} className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button onClick={()=>basketAdd(true)} className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
        <div className="basketItem">
            <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
            <div className="basketItemContents">
                <div className="LikeitemPriceLine">
              <div className="LikeItemPrice">12.5$</div>
                </div>
                <div className="itemContent">
                    <div className="temText">
                        <h6>Qora Sham</h6>
                        <span>Lorem ipsum dolor stores amet, consectetur elit editables your</span>
                    </div>
                    <div className="temIndicators">
                        <div className="itemStar"><img width="18" src={require("../shoppingIcons/star.png")} alt="" /> 4.0</div>
                        <div className="itemDown"><img width="18" src={require("../shoppingIcons/icons8-download-64.png")} alt="" />1,355</div>
                    </div>
                </div>
                <div className="itemBottomBtns">
                    <div className="btnLike">
                        <button className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                    </div>
                    <button className="btn_item"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                </div>
            </div>
        </div>
       </div>
        </div>
       
     );
}

export default ShoppingProduct2;