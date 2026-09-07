import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Heading from './compoments/heading'
import Breif from './compoments/Breif'
import Time from './compoments/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Container'>
        <Heading />
        <Breif />
        <Time />
      </div>
    </>
  )
}

export default App
