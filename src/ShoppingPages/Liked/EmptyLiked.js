import React, { Component }  from 'react';
import "./Liked.scss"

function EmptyLiked() {
    return (
        <div className="emptyLiked">
            <div className="likedCard">
                <img src={require("../shoppingIcons/icons8-love-100.png")} alt="" />
                <h2>Is empty</h2>
                <span>lorem ipsum dolorsi sit amet dill one redist for</span>
            </div>
        </div>
    );
}

export default EmptyLiked;