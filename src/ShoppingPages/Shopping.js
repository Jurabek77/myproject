import React, { Component }  from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import BuyCard from "./Buys/BuyCard";
import BuyForm from "./Buys/BuyForm";
import Categories from "./Categories/Categories";
import EmptyLiked from "./Liked/EmptyLiked";
import Liked from "./Liked/Liked";
import Question from "./Question/Question";
import Setting from "./Setting/Setting";
import "./Shopping.scss"
import EmptyCart from "./ShoppingCart/EmptyCart";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShoppingItemProduct from "./shoppingProducts/ShoppingItemProduct";
import ShoppingProduct2 from "./shoppingProducts/ShoppingProduct2";
import ShoppingProducts from "./shoppingProducts/ShoppingProducts";

function Shopping() {

const [clicked, setCliked] = useState("")

const filter = ()=>{
    let filter = document.querySelector(".sidebar_filters")
    let menu = document.querySelector(".sidebar_menu")
    let shFilter = document.querySelector(".shopping_filter")
    let shMenus = document.querySelector(".shopping_menus")
    filter.classList.add("active")
    menu.classList.remove("active")
shFilter.classList.remove("noActive")
shMenus.classList.add("noActive")
}
const menu = ()=>{
    let filter = document.querySelector(".sidebar_filters")
    let menu = document.querySelector(".sidebar_menu")
    let shFilter = document.querySelector(".shopping_filter")
    let shMenus = document.querySelector(".shopping_menus")
    filter.classList.remove("active")
    menu.classList.add("active")
shFilter.classList.add("noActive")
shMenus.classList.remove("noActive")
}

const actives = (param)=>{
    for(let i=0; i<6; i++) document.getElementsByClassName("sidebar_menu_item")[i].classList.remove("active")
    document.querySelector(param).classList.add("active")
    console.log("fdskj");
}
const changeState = (param)=>{
    console.log(param);
    setCliked(param)
console.log(clicked);
}
let [likke, setLikke] = useState([])
const addLike = (param)=>{
    setLikke(prev => [...prev, param])
}
let [baskett, setBaskett] = useState([])
const basketAdd = (param)=>{
    setBaskett(prev => [...prev, param])

}
const menus = (clicked)=>{
    switch(clicked){
        case 'ProductItems':
            return <ShoppingItemProduct setCliked={setCliked} addLike={addLike} basketAdd={basketAdd} changeState={changeState} />
        case 'store':
            // document.querySelector(".nav_icons").innerHTML = '<img onClick='+setCliked("store2")+' width="100" height="100" src="' + require("./shoppingIcons/icons8-sorting-64.png") + '" alt="" />'
            return <ShoppingProducts actives={actives} setCliked={setCliked} changeState={changeState} menus={menus} basketAdd={basketAdd} addLike={addLike} />
        case 'store2':
            // document.querySelector(".nav_icons").innerHTML = '<img onClick='+setCliked("store")+' width="100" height="100" src="' + require("./shoppingIcons/icons8-medium-icons-80.png") + '" alt="" />'
        return <ShoppingProduct2  actives={actives} setCliked={setCliked} changeState={changeState} menus={menus} basketAdd={basketAdd} addLike={addLike} />
        case 'basket':
            return <ShoppingCart setCliked={setCliked} changeState={changeState} baskett={baskett} setBaskett={setBaskett} addLike={addLike}  />
        case 'liked':
            return <Liked changeState={changeState} likke={likke} setLikke={setLikke} basketAdd={basketAdd} />
        case 'category':
            return <Categories />
        case 'setting':
            return <Setting />
        case 'question':
            return <Question />
        case 'BuyCard':
            return <BuyCard setCliked={setCliked} />
        case 'BuyForm':
            return <BuyForm />
        default:
            return <ShoppingProducts actives={actives} setCliked={setCliked} changeState={changeState} />
            // return <BuyForm />
    }
}
    return (
        <div className="shopping">
            <div className="shopping_body pt-1 ps-2">
                <div className="shopping_nav">
                    <div className="nav_home"><Link className="LinkHome" to={"/"}>Home</Link></div>
                    <div className="nav_icons_line d-flex">
                        <button onClick={()=>(clicked ==="store2"? setCliked("store"): setCliked("store2"), actives('.store'))}  className="nav_icons">
                            <img id="navSortImg" src={require("./shoppingIcons/icons8-medium-icons-80.png")} alt="" />
                        </button>
                        <button className="nav_icons">
                            <img src={require("./shoppingIcons/sun.png")} alt="" />
                        </button>
                        <button onClick={()=>(setCliked('liked'), actives('.liked'))} className="nav_icons">
                            <img src={require("./shoppingIcons/icons8-heart-upside-down-96.png")} alt="" />
                        </button>
                        <button onClick={()=>(setCliked("basket"), actives('.basket'))} className="nav_icons">
                            <img src={require("./shoppingIcons/icons8-cart-64.png")} alt="" />
                        </button>
                        <button className="nav_icons">
                            <img src={require("./shoppingIcons/icons8-user-64.png")} alt="" />
                        </button>
                    </div>
                </div>
                <div className="shppings_section">
                    <div className="shopping_sidebar">
                        <div className="shopping_sidebar_menu d-flex">
                            <button onClick={filter} className="sidebar_filters">Filters</button>
                            <button onClick={menu} className="sidebar_menu active">Menu</button>
                        </div>
                        <div className="shopping_sidebar_body">
                            <div className="shopping_filter noActive">
                            <div className="shopping_filter_price">
                                <div className="price_title">Price</div>
                                <div className="filter_price_inputs">
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="shopping_filter_checks">
                                <div className="filter_check_title">Narxi</div>
                                <div className="filter_check_list">
                                    <div className="filter_stars">
                                        <input type="checkbox" className="checkbox" />
                                         <img width="13" src={require("./shoppingIcons/icons8-star-96.png")} alt="" />
                                         <img width="13" src={require("./shoppingIcons/icons8-star-96.png")} alt="" />
                                         <img width="13" src={require("./shoppingIcons/icons8-star-96.png")} alt="" />
                                         <img width="13" src={require("./shoppingIcons/icons8-star-96.png")} alt="" />
                                         <img width="11" src={require("./shoppingIcons/str.png")} alt="" />
                                         -dan ko'proq
                                         </div>
                                    <div className="filter_downloads">
                                    <input type="checkbox" className="checkbox" />
                                         Eng yangi qo'shilganlar
                                    </div>
                                    <div className="filter_stars">
                                    <input type="checkbox" className="checkbox" />Eng ko'p sotilganlar</div>
                                    <div className="filter_free">
                                    <input type="checkbox" className="checkbox" />Bepul yetgazib berish</div>
                                </div>
                            </div>
                            </div>
                            <div className="shopping_menus">
                            <div onClick={()=>(setCliked("store"), actives('.store'))} className="sidebar_menu_item store active">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/store.png")} alt="" />
                                </div>
                                <span>Store</span>
                            </div>
                            <div onClick={()=>(setCliked("basket"), actives('.basket'))} className="basket sidebar_menu_item">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/icons8-cart-64.png")} alt="" />
                                </div>
                                <span>Basket</span>
                            </div>
                            <div onClick={()=>(setCliked("liked"), actives('.liked'))} className="liked sidebar_menu_item">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/icons8-heart-upside-down-96.png")} alt="" />
                                </div>
                                <span>Liked</span>
                            </div>
                            <div onClick={()=>(setCliked("category"), actives('.category'))} className="category sidebar_menu_item">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/icons8-categorize-96.png")} alt="" />
                                </div>
                                <span>Category</span>
                            </div>
                            <div onClick={()=>(setCliked("setting"), actives('.setting'))} className="setting sidebar_menu_item">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/setting.png")} alt="" />
                                </div>
                                <span>Setting</span>
                            </div>
                            <div onClick={()=>(setCliked("question"), actives('.question'))} className="question sidebar_menu_item">
                                <div className="sidebar_menu_icon_store">
                                    <img src={require("./shoppingIcons/icons8-question-64.png")} alt="" />
                                </div>
                                <span>Question</span>
                            </div>
                            </div>
                        </div> 
                    </div>

                    <div className="shopping_products">
                    { menus(clicked) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopping;