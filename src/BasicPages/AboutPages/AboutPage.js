import React, { Component }  from 'react';
import AboutItem from './AboutItems';
import './AboutPage.scss'

function AboutPage() {
    let ml = `380vw`;
const sliderMargin = (param)=>{
    return ml = param ?`calc(470vw - ${param}0vw)` : '480vw'
}
const handleSlider=(param, e)=>{
   document.querySelector(".slider1").style.marginLeft = sliderMargin(param)
   document.querySelectorAll(".about_circle").forEach((item)=>{
       if(document.querySelector(e) !== item){
           item.classList.remove("active")
       }else{
        item.classList.add("active")
       }
   })
   

}

    return ( 
        <div className='AboutPage'>
          <div className="AboutBody container">
              <div className="about_title">
                  <h3>About</h3>
              </div>
              <div className="about_sliders">
                  <div className="about_sliders_line">
                  <div className="about_sider_view slider1">
              <AboutItem />
                  </div>
                  <div className="about_sider_view">
              <AboutItem />
                  </div>
                  <div className="about_sider_view">
              <AboutItem />
                  </div>
                  <div className="about_sider_view">
              <AboutItem />
                  </div>
                  <div className="about_sider_view">
              <AboutItem />
                  </div>
                  </div>
                <div className="about_sliders_circles">
                    <div onClick={()=>handleSlider(10, ".c1")} className="about_circle c1 active"></div>
                    <div onClick={()=>handleSlider(30, ".c2")} className="about_circle c2"></div>
                    <div onClick={()=>handleSlider(50, ".c3")} className="about_circle c3"></div>
                    <div onClick={()=>handleSlider(70, ".c4")} className="about_circle c4"></div>
                    <div onClick={()=>handleSlider(90, ".c5")} className="about_circle c5"></div>
                </div>
              </div>
          </div>
        </div>
     );
}

export default AboutPage;