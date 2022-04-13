import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection';
import Services from './components/services';
// import { ServicesWrapper } from './components/services/ServicesElements';




function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      
      <Services />
      

      
    </div>     
  )
}
export default App;
