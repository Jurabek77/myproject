import React, { Component }  from 'react';
import './ContactsPage.scss'

function ContectsPage() {
const handlePhone =()=>{
    document.querySelector(".contact_modal_phone").style.visibility = "visible"
}
const handleTelegram =()=>{
    document.querySelector(".contact_modal_telegram").style.visibility = "visible"
}
const handleGmail =()=>{
    document.querySelector(".contact_modal_gmail").style.visibility = "visible"
}
const closeModal = (param)=>{
    document.querySelector(param).style.visibility = "hidden"
    console.log("hhh");
}

    return ( 
        <div className="contacts-bg">

<div className="contacts-body container">
    <div className="contact_modal_phone">
        <div onClick={()=>closeModal(".contact_modal_phone")} className="phone_close_modal">
            x
        </div>
        <div className="contact_modal_phone_item">
            +998941274010
        </div>
    </div>
    <div className="contact_modal_telegram">
        <div onClick={()=>closeModal(".contact_modal_telegram")} className="phone_close_modal">
            x
        </div>
        <div className="contact_modal_phone_item">
            +998941274010
        </div>
    </div>
    <div className="contact_modal_gmail">
        <div onClick={()=>closeModal(".contact_modal_gmail")} className="phone_close_modal">
            x
        </div>
        <div className="contact_modal_phone_item">
            +998941274010
        </div>
    </div>
    <div className="constacts_title">
        <h2>Contacts</h2>
    </div>
    <div className="contacts-Lines">
        <div className="contacts-item">
            <div onClick={handlePhone} className="contacts-circle">
                    <img src={require("./contectsImg/phone.png")} alt="" />
            </div>
            <div className="contacts__items__text">
                Lorem ipsum, dolor sit amet consectetur.
            </div>
        </div>
        <div className="contacts-item">
            <div onClick={handleTelegram} className="contacts-circle">
                    <img src={require("./contectsImg/telegram.png")} alt="" />
            </div>
            <div className="contacts__items__text">
                Lorem ipsum, dolor sit amet consectetur.
            </div>
        </div>
        <div className="contacts-item">
            <div onClick={handleGmail} className="contacts-circle">
                    <img src={require("./contectsImg/gmail.png")} alt="" />
            </div>
            <div className="contacts__items__text">
                Lorem ipsum, dolor sit amet consectetur.
            </div>
        </div>
    </div>
    <div className="contact_btn_group">
 <div className='contact_click_text'>
 <h5>Questions about our products?</h5>
 <p>Ask anythis about our products, we will give you Instant Answare</p>
 </div>
 <div className='w-25 contacts-btn d-flex justify-content-end'>
     <button onClick={()=> window.scrollTo(0, window.innerHeight*5)}>Click Me</button></div>
    </div>
</div>
        </div>
     );
}

export default ContectsPage;