import React, { Component }  from 'react';
import { useState } from "react";
import "./MessagesPage.scss"

function MessagesPage() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [messages, setMessages] = useState("")
let chats = document.querySelector('.message_chats')

const sending = ()=>{
        chats.innerHTML += `<h6>${messages}<h6>`
    setName("")
    setEmail("")
    setMessages("")
    document.querySelector(".MessagesinputNames").setAttribute('disabled', '');
    document.querySelector(".MessagesinputEmails").setAttribute('disabled', '');
}
const cancelled = ()=>{
    setName("")
    setEmail("")
    setMessages("")
}
    return ( 
        <div className="MessagesPage">
        <div className="Messages_Body container">
        <div className="messages_title">
                <h5>Messages</h5>
                </div>
            <div className="messages_title">
                <h6>you can write to us if you have any questions or suggestions</h6>
            </div>
            <div className="messages_line">
                <div className="message_inputs">
                    <input value={name} onInput={e=> setName(e.target.value)} className="MessagesinputNames" type="text" placeholder="name" />
                    <input value={email} onInput={e=> setEmail(e.target.value)} className="MessagesinputEmails" type="email"  placeholder="email" />
                    <textarea value={messages} onInput={e=> setMessages(e.target.value)} className="Messagesinput" name="" id="" placeholder="Messages..." cols="30" rows="10"></textarea>
                    <div className="message_btns">
                        <button onClick={cancelled}>Cancel</button>
                        <button onClick={sending}>Send</button>
                    </div>
                </div>
                {/* <div dangerouslySetInnerHTML={{__html: `<h6>${messages}<h6>`}} className="message_chats"> */}
                <div className="message_chats">
                </div>
            </div>
        </div>
        </div>
     );
}

export default MessagesPage;