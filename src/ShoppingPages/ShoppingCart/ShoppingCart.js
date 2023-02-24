import React, { Component }  from 'react';
import BasketItem from "./BasketItem"
import EmptyCart from "./EmptyCart"
import "./ShoppingCart.scss"
function ShoppingCart({setCliked, baskett, setBaskett, addLike, changeState}) {
    const selectAll = () => {
        const check = document.getElementsByClassName('basketCheck')
        for (let i = 0; i < 20; i++) {
            if (check[i].checked == true) {
                check[i].checked = false
            } else {
                check[i].checked = true
            }
        }
    }
    const deletes = () => {
        const check = document.getElementsByClassName('basketCheck')
        for (let i = 0; i < 20; i++) {
            if (check[i].checked == true) {
                check[i].parentElement.parentElement.parentElement.remove()
                i = 0
            }
        }
    }
    // console.log(document.querySelector(".basketItemsBody"));
    const clears = ()=>{
        // document.querySelector(".basketItemsBody").innerHTML = ""
        setBaskett([])
    }
    return (
        <div className="shoppingCart">
            <div className="basketItemSearch">
                <input placeholder="Search..." type="search" />
            </div>
            <div className="basketNavs">
                <div className="basketItemControl">
                    <button onClick={selectAll} className="btn basketSelectBtn">select all</button>
                    <button onClick={deletes} className="btn basketEditBtn">Edit delete</button>
                    <button onClick={clears} className="btn basketClearBtn">Clear</button>
                </div>
            </div>
            <div className="basketItemsBody">
               {baskett.length? baskett.map(it=>(<BasketItem addLike={addLike} changeState={changeState}/>)):<EmptyCart />}
            </div>
            <div className="basketBuyBtnLine">
                <button onClick={()=>setCliked("BuyCard")} className="btn basketBuyBtn">1790.8$ Buy</button>
            </div>
        </div>
    );
}

export default ShoppingCart;