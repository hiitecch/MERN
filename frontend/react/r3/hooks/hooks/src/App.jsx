import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  const [FirstName, setFirstName] = useState(" ");
  const clicked = useRef(0);

  const FirstNamee=(event)=>{
    if (event.key === "Enter") {
      setFirstName(event.target.value);

  }
}

  const submitHandler=(event)=>{
    event.preventDefault();
  }

  return (
    <>
      <div>
        <h1>Name:{FirstName} | clicked:{clicked.current}</h1>
       <form onSubmit={submitHandler}>
        <input type="text"  placeholder='enter name' onKeyDown={FirstNamee}/>
        <input type="submit" value="submit"  onClick={()=>{clicked.current += 1 }}/>

        </form>
      </div>
    </>
  );
}


export default App
