import { useState } from 'react'
import './App.css'

import {AboutMe} from './Components/AboutMe'
import { Projects } from './Components/Projects'
import { Header } from './Components/Header'
import { Contact } from './Components/Contact'
import { SkillsDescription } from './Components/SkillsDescription'
import { NavArriba } from './Components/NavArriba'


function App() {
  return (    
  <div className='bg-gray-100'>
    <NavArriba/>
    <Header />
    <AboutMe/>
    <SkillsDescription />
    <Projects />
    <Contact />
  </div>
  );
}

export default App
