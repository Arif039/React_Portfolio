import { useState } from 'react'

import './App.css'

import Navbar from './components/navbar';
import Banner from './components/banner';
import Process from './components/process';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Banner/>
      <Process/>
     
    </>
  )
}

export default App
