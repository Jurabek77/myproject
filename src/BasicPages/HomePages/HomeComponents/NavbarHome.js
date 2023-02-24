import React, { Component }  from 'react';
function NavbarHome() {
const vh = window.innerHeight

// let btns = document.querySelectorAll("button")
// btns.forEach(btn => btn.className += " active")

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        document.querySelector(".nav_home").classList.add("active")
        document.querySelector(".nav_category").classList.remove("active");
        document.querySelector(".nav_about").classList.remove("active");
        document.querySelector(".nav_contact").classList.remove("active")
    }
     if(window.scrollY > vh-200){
        document.querySelector(".nav_category").classList.add("active")
        document.querySelector(".nav_about").classList.remove("active")
        document.querySelector(".nav_contact").classList.remove("active")
        document.querySelector(".nav_home").classList.remove("active")
    } 
     if(window.scrollY > vh*2-200){
        document.querySelector(".nav_about").classList.add("active")
        document.querySelector(".nav_contact").classList.remove("active")
        document.querySelector(".nav_home").classList.remove("active")
        document.querySelector(".nav_category").classList.remove("active");
    }
     if(window.scrollY > vh*3-200 ){
        document.querySelector(".nav_contact").classList.add("active")
        document.querySelector(".nav_home").classList.remove("active")
        document.querySelector(".nav_category").classList.remove("active");
        document.querySelector(".nav_about").classList.remove("active");
    }
    if(window.scrollY > vh*4-200 ){
        document.querySelector(".nav_contact").classList.remove("active")
        document.querySelector(".nav_home").classList.remove("active")
        document.querySelector(".nav_category").classList.remove("active");
        document.querySelector(".nav_about").classList.remove("active");
    }
})
const scrollToFnc = (param) =>{
    window.scrollTo(0, vh*param)
    if(param === 0){
        document.querySelector(".nav_home").classList.add("active")
        document.querySelector(".nav_category").classList.remove("active");
        document.querySelector(".nav_about").classList.remove("active");
        document.querySelector(".nav_contact").classList.remove("active")
    }
}
const notification = ()=>{
    document.querySelector(".navbar_bell").classList.toggle("toggle")
}
    return (
        <div className="homeNavbar d-flex mx-auto">
           <div className="navItem d-flex position-relative">
<button onClick={()=> scrollToFnc(0)} className="nav_home active">Home</button>
<button onClick={()=>scrollToFnc(1)} className="nav_category">Category</button>
<button onClick={()=> scrollToFnc(2)} className="nav_about">About</button>
<button onClick={()=> scrollToFnc(3)}  className="nav_contact">Contact</button>
           <div className="nav_icons">
           <i onClick={()=> window.scrollTo(0, vh*5)} className="fa-solid fa-envelope"></i>
           <i onClick={notification} className="fa-solid fa-bell"></i>
           <i className="fa-solid fa-language"></i>
           <i className="fa-solid fa-sun"></i>
           </div>
           <div className="navbar_bell toggle">
               <div className="square"></div>
               <h6>notification</h6>
               <input type="checkbox" name="" id="" />
           </div>
           </div>
        </div>
    );
}

export default NavbarHome;