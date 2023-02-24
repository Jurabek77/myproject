import React, { Component }  from 'react';
import './LocationPage.scss'

function LocationPage() {
    return ( 
        <div className="locationPage border">
          <div className="location_body container">
              <div className="location_title">
                  <h3>Location</h3>
              </div>
              <div className="location-sections">
                  <div className="location_texts">
                      <div className="location_cardText">
                     <h3>State:  Uzbekistan</h3>
                     <h3>City:  Buxara</h3>
                     <h3>Region:  Peshku</h3>
                     <h3>Center:  Yangibozor</h3>
                      </div>
                      <a href={`https://www.google.com/maps/place/40%C2%B002'18.7%22N+64%C2%B023'13.6%22E/@40.038532,64.387106,15z/data=!4m5!3m4!1s0x0:0xdf72dd6a66834f41!8m2!3d40.0385322!4d64.3871063?hl=ru-RU`} className='btn btn_google_Map'>Open Google Map</a>
                  </div>
                  <div className="location_map">
                  <iframe  width="600" height="450" src="//maps.google.com/maps?q=40.03853221378658, 64.3871063234242&z=15&output=embed" />
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.675829730526!2d-75.6876061!3d45.42609535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament+Hill!5e0!3m2!1sen!2sca!4v1528808935681" width="600" height="450" ></iframe> */}
                  </div>
              </div>
          </div>
        </div>
     );
}

export default LocationPage;