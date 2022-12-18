import './App.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useState } from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import AJ from './AJ';
import RJ from './RJ';
import JJ from './JJ';
// import Home from './Home';
import NavigationBar from './components/NavigationBar';
import Nomatch from './Nomatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Underlay from './components/Underlay';
function App() {
  return (
    <>
      <NavigationBar />
      <Underlay />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AJ></AJ>} />
            <Route path='/RJ' element={<RJ />} />
            <Route path='/JJ' element={<JJ />} />
            <Route path='/AJ' element={<AJ></AJ>} />
            <Route path='*' element={<Nomatch />} />
          </Routes>
          {/* <ControlledCarousel /> */}
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
