import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Services from "../src/components/Services";
import Solution from './components/Solution';
import About from './components/About';
import Contact from './components/Contact';
import Training from './components/Training';

function App() {

  return (
  <div>

    <Navbar />
    <Home />
    {/* <Solution /> */}
    <Services />
    {/* <Training /> */}
    <About />
    <Contact />

  </div>
  )
}

export default App;