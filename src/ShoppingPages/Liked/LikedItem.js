import React, { Component }  from 'react';
function LikedItem({delLike, addBaskets, basketAdd, changeState}) {
    return ( 
          <div className="basketItem">
                <img className="itemImgs" width="20" height="150" src={require("../shoppingImgs/1598292994_377290.jpg")} alt="" />
                <div className="basketItemContents">
                    <div onClick={()=>changeState('ProductItems')} className="LikeitemPriceLine">
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
                            <button onClick={(e)=>delLike(e.target)} className="btn"><img width="23" height="18" src={require("../shoppingIcons/like.png")} alt="" /> Like</button>
                        </div>
                        <button onClick={(e)=>(addBaskets(e.target), basketAdd(true))} className="btn_item"> <img className="imggs" src={require("../shoppingIcons/Vector.png")} alt="" /> Add</button>
                    </div>
                </div>
            </div> 
     );
}

export default LikedItem;