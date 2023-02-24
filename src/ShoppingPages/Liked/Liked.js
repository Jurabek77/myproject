import React, { Component }  from 'react';
import EmptyLiked from "./EmptyLiked";
import "./Liked.scss"
import LikedItem from "./LikedItem";

function Liked({likke, setLikke, basketAdd, changeState}) {
// if(likke){
//    document.getElementsByClassName("likedItemsBody").innerHTML = "lkf lk k"
// // }
const clears = ()=>{
    // document.querySelector(".likedItemsBody").innerHTML = ""
    setLikke([])
}

const delLike = (e)=>{
    e.parentElement.parentElement.parentElement.parentElement.remove();
    let counts = document.querySelector(".likedItemsBody").childElementCount

    if(counts ==0){
        clears()
    }

    // console.log(counts);
    // if(counts == 0){
    //     setLikke([])
    // }
//     let newArr = [...likke]
//     let news = [];
//     for(let i=0; i<counts; i++){
// news.push(newArr[i])
//     }
    // newArr.pop()
    // newArr.splice(0, counts)
    // setLikke(prev=>{
    //     let nn = [...prev];
    //     nn.pop()
    //     console.log(nn);
    //     return [...nn]
    // })
    // newArr.length = newArr.length-1
}
const addBaskets = (e)=>{
    // console.log(e.querySelector("img").src == require("../shoppingIcons/Vector.png"));
    if(e.querySelector("img").src == require("../shoppingIcons/Vector.png")){
    e.innerHTML = '<img width="32" height="30" src="' + require("../shoppingIcons/basket.png") + '" alt="" /> Del'
    }else{
        e.innerHTML = '<img width="32" height="30" src="' + require("../shoppingIcons/Vector.png") + '" alt="" /> Add'
    }
    // let newItem = '<img width="100" height="100" src="' + require("../shoppingIcons/icons8-sorting-64.png") + '" alt="" />'
    // let itemImg = e.closest(".imggs");
    // itemImg.parentNode.replaceChild(newItem, itemImg);
 }
    return (  
        <div className="liked">
           <div className="shoppingCart">
            <div className="basketItemSearch">
                <input placeholder="Search..." type="search" />
            </div>
           <div className="basketNavs">
            <div className="basketItemControl">
        <button onClick={clears} className="btn basketClearBtn ms-5">Clear</button>
            </div>
           </div>
           <div className="likedItemsBody">
            {likke.length? likke.map(it=>(<LikedItem changeState={changeState} delLike={delLike} basketAdd={basketAdd} addBaskets={addBaskets} />)) : <EmptyLiked />}
           
           </div>
        </div>
        </div>
    );
}

export default Liked;