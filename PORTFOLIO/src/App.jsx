import { useState } from 'react'

import './App.css'

import Navbar from './components/navbar';
import Banner from './components/banner';
import Process from './components/process';
import Projects from './components/projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Banner/>
      <Process/>
      <Projects/>
     
    </>
  )
}

export default App
