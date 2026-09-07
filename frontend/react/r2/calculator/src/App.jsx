import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './components/Container'
import MainContainer from './components/MainContainer'

function App() {
  const [Display,setDisplay]= useState("");

  const btn = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', '.', '=', '/','c'
    ];

  const handleButtonClick = (item) => {
    if (item === "c") {
      setDisplay("");
    }
    else if (item === "=") {
      const result = eval(Display);
      setDisplay(result);
    }
    else {
      setDisplay(prev => prev + item);
    }
  }



    

  return (
    
    <>
      <MainContainer  inputDisplay={Display} btn={btn} onButtonClick={handleButtonClick}></MainContainer>
      
     
    </>
  )
}

export default App
