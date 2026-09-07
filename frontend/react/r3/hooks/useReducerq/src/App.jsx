import { useReducer, useState } from 'react'
import './App.css'

function App() {


  const CounterReducer=(currentState,action)=>{
    let NewState=currentState;
    if(action.type=="INCREMENT"){
      NewState+=1;
    }
    else if(action.type=="DECREMENT"){
      NewState-=1;
    }
    return NewState;
  }



  

  const intialValue=0;
  const [CounterVal,CounterDispatch]=useReducer(CounterReducer,intialValue);

  const hanldeIncrement=()=>{
    CounterDispatch({type:"INCREMENT"});

  }

  const hanldeDecrement=()=>{
    CounterDispatch({type:"DECREMENT"});

  }

  return (
    <>
     <h1>Counter : {CounterVal}</h1>
     <button onClick={hanldeIncrement}>Increment</button>
     <button onClick={hanldeDecrement}>decrement</button>
    </>
  )
}

export default App
