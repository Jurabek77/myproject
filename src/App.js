import React, { Component }  from 'react';
import {Route, Routes} from 'react-router-dom'
import Shopping from './ShoppingPages/Shopping';
import BasicMain from './BasicPages/BasicMain';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/' element={<BasicMain />} />
      </Routes>
    </div>
  );
}

export default App;
