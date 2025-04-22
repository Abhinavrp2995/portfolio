import { useState } from 'react'

import './App.css'
import NavBar from './Navbar'
import Home from './Home'
import Portfolio from './Protfolio'
import About from './About'
import Experience from './Experience'
import SocialLinks from './Sociallinks'
import Contact from './Contact'

function App() {
  
  return (
    <>
    <NavBar/> 
    <Home/> 
    <About/>
    <Portfolio/>
    <Experience/>
    <SocialLinks/>
    <Contact/>
    </>
  )
}

export default App
