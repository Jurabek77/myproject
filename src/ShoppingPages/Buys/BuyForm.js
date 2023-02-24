import React, { Component }  from 'react';
import "./BuyCard.scss"

function BuyForm() {
    return ( 
        <div className="buyForm">
            <div className="formSection">
                <img width="100" src={require("../shoppingIcons/icons8-card-payment-100.png")} alt="" />
                <div className="cardNumber">
                    <small>Card number</small>
                    <input type="text" />
                </div>
                <div className="cardDate">
                    <small>Date</small>
                    <div className="cardDates">
                    <input type="text" />
                <h3>/</h3>
                    <input type="text" />
                    </div>
                </div>
                <div className="cardCvNameLine">
                <div className="cardCv">
                    <small>Cvv</small>
                    <input className="Cvv" type="text" />
                </div>
                <div className="cardName">
                    <small>Name</small>
                    <input className="NameInputs" type="text" />
                </div>
                </div>
                <div className="formCheck">
                    <input type="checkbox" />
                    <small>Save Card</small>
                </div>
                <div className="formBtnLine">
                    <button className="formClear">Clear</button>
                    <button className="formPay">Pay Now</button>
                </div>
            </div>
        </div>
     );
}

export default BuyForm;