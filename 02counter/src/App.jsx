import { useState } from 'react'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)
  //  counter ak variable hai jo ki responsible hai set counet function ko update karne me

  // let counter= 5;
  
  const addValue = () => {

    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevcounter)=> prevcounter + 1);
    setCounter((prevcounter)=> prevcounter + 1);        
    setCounter((prevcounter)=> prevcounter + 1);
    setCounter((prevcounter)=> prevcounter + 1);


    // if (counter < 20) { // Check if counter is less than 20
    //   setCounter(counter + 1);


      
    // } else {
    //   console.log("Counter cannot exceed 20");
    // }
  };
  
  const removeValue = () => {
    if (counter > 0) { // Check if counter is greater than 0
      setCounter(counter - 1);
    } else {
      console.log("Counter cannot go below 0");
    }
  };
  


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