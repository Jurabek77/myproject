import React, { Component }  from 'react';
function BasketItem({addLike, changeState}) {
    const btnInc = (e)=>{
const closest = e.nextElementSibling.childNodes[0].nodeValue
const innerCount = e.nextElementSibling.innerHTML = +closest + 1
    }
    const btnDec = (e)=>{
        const closest = e.previousElementSibling.childNodes[0].nodeValue
        const innerCount = e.previousElementSibling.innerHTML = (+closest >0) ? +closest - 1 : 0
            }
    return ( 
        <div className="basketItem">
        <img onClick={()=>changeState('ProductItems')} className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
        <div className="basketItemContents">
            <div className="itemPriceLine">
                <div className="basketItemPrice">12.5$</div>
                <div className="basketItemTotalPrice">TOTAL: 25.0$</div>
                <input className="basketCheck" type="checkbox" />
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
                <div className="btnCounts">
                    <button onClick={(e)=>btnInc(e.target)} className="btnInc">+</button>
                    <h5 className="countItem">0</h5>
                    <button onClick={(e)=>btnDec(e.target)} className="btnDec">-</button>
                </div>
            </div>
        </div>
    </div>
     );
}

export default BasketItem;