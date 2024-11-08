import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education' 
import Skills from './Components/Skills/Skills' 
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App