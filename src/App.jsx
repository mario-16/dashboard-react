import './App.css'
import { Boton } from './components/Boton'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
        </div>
      </div>

      <Boton />
    </>
  )
}

export default App
