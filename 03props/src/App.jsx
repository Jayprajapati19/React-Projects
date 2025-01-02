import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName :"jay",
    age:21,

  }

  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-500 to-black p-4 rounded-3xl'>Jay web developer</h1>

    <Card username = "jay" btnText="clickMe"/>

    <Card username="diyuu" btnText="visitMe"/>
    
    <Card username="keval" btnText="guduu"/>


  
    </>
  )
}

export default App
