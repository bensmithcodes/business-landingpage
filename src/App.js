
import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js"; 
import About from "./components/about/About.js";
import Developer  from './components/developer/Developer.js';
import Suscribe from './components/suscribe/Suscribe.js';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Developer></Developer>
     <Suscribe></Suscribe>
     <Footer></Footer>
    </div>
  );
}

export default App;
