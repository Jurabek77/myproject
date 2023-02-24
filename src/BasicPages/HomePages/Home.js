import React, { Component }  from 'react';
import './Home.scss'
import Basic from './HomeComponents/Basic'
export default function Home() {
  return (
    <div className='homePages'>
      <div className='container'>
      <Basic  />
      <div className="fixeds">
      <div className="circles d-flex">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      </div>
      </div>
    </div>
  )
}
