import React, { Component }  from 'react';
function AboutItem() {
    return ( 
        <div className="about_item_slider">
        <div className="about_item_slider_body d-flex">
            <div className="about_slider_text">
                <div className="about_slider_title">
                    <h2>what are our goals</h2>
                </div>
                <div className="about_sliter_texts">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda porro molestiae. Voluptates excepturi est natus ratione temporibus quis, assumenda quasi, soluta ipsa et necessitatibus dolores exercitationem ipsam repudiandae quibusdam?</p>
                </div>
            </div>
            <div className="about_slider_img">
                <img src={require("./AboutImgs/photo.jpg")} alt="" />
            </div>
        </div>
    </div>
     );
}

export default AboutItem;