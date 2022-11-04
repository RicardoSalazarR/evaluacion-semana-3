import { useState } from 'react'
import './App.css'
import Locations from './components/Locations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Locations/>
    </div>
  )
}

export default App
