

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar"
// import Popular from "./Popular"
import Story from "./Story"

function App(){
  return (
    <Router>
    <div className="header">
      
      {/* <Popular /> */}
      <Navbar />
      <Story/>
      <Routes>
        <Route path="/" element={<Story />} />
        {/* <Route path="/:search" element={<Story />} /> */}
        </Routes>
    </div>
    </Router>
  );
}

export default App



