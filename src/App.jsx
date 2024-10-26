import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TipCalculator from './page/TipCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TipCalculator/>
    </>
  )
}

export default App
