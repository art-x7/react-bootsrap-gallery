import React from 'react';
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home'
import About from './pages/about/About'
import InfoPic from './pages/info/InfoPic'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/info' element={<InfoPic />} />
      </Routes>
    </>
  );
}

export default App;