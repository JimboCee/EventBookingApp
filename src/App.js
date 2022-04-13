import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllRoutes from './allroutes';


function App() {
  return (
    <div className='work'>
      <Navbar />
      <div className='stuff'>
        <Router>
          <AllRoutes />
        </Router>
      </div>

    </div>     
  );
}


export default App;
