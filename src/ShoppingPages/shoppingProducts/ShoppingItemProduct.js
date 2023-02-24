import React, { Component }  from 'react';
import "./ShoppingProducts.scss"

function ShoppingItemProduct({changeState=Function.prototype,  addLike, basketAdd, setCliked}) {
    const btnInc = (e)=>{
        const closest = e.nextElementSibling.childNodes[0].nodeValue
        const innerCount = e.nextElementSibling.innerHTML = +closest + 1
            }
            const btnDec = (e)=>{
                const closest = e.previousElementSibling.childNodes[0].nodeValue
                const innerCount = e.previousElementSibling.innerHTML = (+closest >0) ? +closest - 1 : 0
                    }
    return (
        <div className="ShoppingItemProduct">
            <div className="productItemBackBtn">
                <button onClick={()=> changeState("store")} className="btn"><img width="50" src={require("../shoppingIcons/icons8-back-arrow-64.png")} alt="" /></button>
            </div>
            <div className="d-flex ItemProductBody">
                <div className="ItemProductImg">
                    <img width="510" height="318" src={require("../shoppingImgs/buffalo-check4web.jpg")} alt="" />
                </div>
                <div className="productItemContents">
                    <div className="productItemTopLine">
                        <div className="itemInPrice">120.5$</div>
                        <div className="itemInStar">
                            <img width="28" height="30" src={require("../shoppingIcons/icons8-star-64.png")} alt="" />
                            <img width="28" height="30" src={require("../shoppingIcons/icons8-star-64.png")} alt="" />
                            <img width="28" height="30" src={require("../shoppingIcons/icons8-star-64.png")} alt="" />
                            <img width="28" height="30" src={require("../shoppingIcons/icons8-star-64.png")} alt="" />
                            <img className="me-2" width="28" height="30" src={require("../shoppingIcons/ins8-star-64.png")} alt="" />
                            4.0</div>
                    </div>
                    <div className="productItemBody">
                        <div className="productItemIndicetors">
                            <div className="itemBought">
                                <h3>1,3K</h3>
                                <span>people bought</span>
                            </div>
                            <div className="itemLeft">
                                <h3>320</h3>
                                <span>products left</span>
                            </div>
                            <div className="itemPost">
                                <h3>45</h3>
                                <span>Posted ays ago</span>
                            </div>
                        </div>
                        <div className="itemCheckContent">
                            <div className="itemCheckContentIn">
                                <span className="me-5"><img width="26" src={require("../shoppingIcons/icons8-check-circle-48.png")} alt="" />Lorem ipsum </span>
                                <span><img width="26" src={require("../shoppingIcons/icons8-check-circle-48.png")} alt="" />Lorem ipsum </span>
                            </div>
                            <div className="itemCheckContentIn">
                                <span className="me-5"><img width="26" src={require("../shoppingIcons/icons8-check-circle-48.png")} alt="" />Lorem ipsum </span>
                                <span><img width="26" src={require("../shoppingIcons/icons8-check-circle-48.png")} alt="" />Lorem ipsum </span>
                            </div>
                        </div>
                    </div>
                    <div className="productItemBottom">
                        <div className="itemsBottomBtns">
                            <div className="btnLiked">
                                <button onClick={()=>addLike(true)} className="btn"><img width="23" height="18" src={require("../shoppingIcons/Vector1.png")} alt="" /> Like</button>
                            </div>
                            <div className="itemBtnCounts">
                                <button onClick={(e)=>btnInc(e.target)} className="btnIncs">+</button>
                                <h5>0</h5>
                                <button onClick={(e)=>btnDec(e.target)} className="btnDecs">-</button>
                            </div>
                            <button onClick={()=>basketAdd(true)} className="btn_item_add"> <img src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productItemBuyBtn">
                <button onClick={()=>setCliked("BuyCard")}>1790.8$ Buy</button>
            </div>
        </div>
    );
}

export default ShoppingItemProduct;