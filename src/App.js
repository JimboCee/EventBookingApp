import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import HeroSection from './components/HeroSection';
import Services from './components/services';
import Footer from './components/Footer';




function App() {
  return (
    <div className='App'>
      
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
      
    </div>     
  )
}
export default App;
