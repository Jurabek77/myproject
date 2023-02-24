import React, { Component }  from 'react';
import "./Question.scss"

function Question() {

const send = ()=>{
document.querySelector(".Pagequestion").innerHTML = '<img className="imgBody" width="100" height="100" src="' + require("../shoppingIcons/icons8-check-circle-100.png") + '" alt="" />'
}
    return ( 
        <div className="Pagequestion">
            <img src={require("../shoppingIcons/icons8-question-mark-100.png")} alt="" />
            <div className="questionForms">
                <input className="inp" placeholder="Name" type="text" />
                <input className="inpp" placeholder="Email" type="email" />
                <textarea className="inppp" placeholder="Message" name="message" cols="30" rows="10"></textarea>
                <div className="questionBtns">
                    <button onClick={()=> (document.querySelector(".inp").value="", document.querySelector(".inpp").value="", document.querySelector(".inppp").value="")} className="btn">Cancel</button>
                    <button onClick={send} className="btn">Send</button>
                </div>
            </div>
        </div>
     );
}

export default Question;