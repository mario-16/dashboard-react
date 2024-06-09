import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Boton } from './components/Boton'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Boton />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
