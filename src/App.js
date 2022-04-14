import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection';
import Services from './components/services';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllRoutes from './allroutes';




function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <Services />
    <div className='stuff'>
      <Router>
      <AllRoutes />
      </Router>
      </div>
      <Footer />
      
    </div>     
  )
}
export default App;
