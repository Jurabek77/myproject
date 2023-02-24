import React, { Component }  from 'react';
import NavbarHome from "./NavbarHome";
import home2 from "../HomeImages/home2.jpg"
import HomeBg from "./HomeBg";
import { Link } from "react-router-dom";
let Logo = require("../HomeImages/home1.jpg")
let home3 = require("../HomeImages/home3.jpg")
let home4 = require("../HomeImages/home4.jpg")

function Basic() {

    return ( 
        <div  className="">
           <div className="position-absolute homePages">
           <div className="bg-index">
            <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle6"></div>
                <div className="circle7"></div>
                <div className="circle8"></div>
            </div>
        </div>
      </div>
      <div style={{"position":"relative", "zIndex": "999"}}>
        
        <div className="homeBasic">
        <div className="row w-100 container-xxl d-flex justify-content-between">
          <div className="col-5">
         <div className="HomeWelcome px-5">
           <div className="d-flex mb-0 mx-auto justify-content-center align-items-center"><h4>👋</h4> Hello my friend</div>
           <h2 className="text-center">WELCOME TO OUR STORE</h2>
         </div>
         <div className="home__btns">
         <Link to={"/shopping"} /* to={"https://dapper-crisp-a0585e.netlify.app/shopping"} */ className="btn homeBtn text-white fs-6">Start shopping</Link>
         <div onClick={()=> window.scrollTo(0, window.innerHeight*4)} className="location__btn">
           <img src={require("../HomeImages/location.png")} alt="" />
         </div>
         </div>
          </div>
          <div className="col-5 homeimgs">
        <div>
        <img className="homeImg1" src={Logo} alt="sss" />
         <img className="homeImg2" src={home2} alt="" />
         <img className="homeImg3" src={home3} alt="" />
         <img className="homeImg4" src={home4} alt="" />
         <div className="homeHello text-center">
           <h2>Hello World</h2>
           <h5>Lorem, ipsum dolor.</h5>
         </div>
        </div>
          </div>
        </div>
        </div>
      </div>
        </div>
     );
}

export default Basic;