import React, { Component }  from 'react';
import "./BuyCard.scss";

function BuyCard({setCliked}) {
    return ( 
        <div className="buyCard">
           <div className="selectionCard">
            <button onClick={()=>setCliked("BuyForm")} className="btn"><img width="240" height="154" src={require("../shoppingImgs/mastercard-png-png-1101.png")} alt="" /></button>
            <button onClick={()=>setCliked("BuyForm")} className="btn"><img width="240" height="154" src={require("../shoppingImgs/Visa_Logo_1992.png")} alt="" /></button>
            <button onClick={()=>setCliked("BuyForm")} className="btn"><img width="240" height="154" src={require("../shoppingImgs/Screenshot_65.png")} alt="" /></button>
            <button onClick={()=>setCliked("BuyForm")} className="btn"><img width="240" height="154" src={require("../shoppingImgs/humo.png")} alt="" /></button>
           </div>
        </div>
     );
}

export default BuyCard;