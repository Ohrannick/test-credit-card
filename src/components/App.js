import React from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './regisration/Registration';
import Card from './card/Card';

import './app.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='wrap'>
          <Routes>
            <Route path='/card' element={<Card />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
