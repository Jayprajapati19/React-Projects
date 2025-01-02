import { useState } from 'react'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)
  //  counter ak variable hai jo ki responsible hai set counet function ko update karne me

  // let counter= 5;


  const addValue=()=>{
  console.log("clicked", counter);
  // counter = counter + 1;      
  setCounter(counter + 1);
  }

  const removeValue=()=>{}


  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value  {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;