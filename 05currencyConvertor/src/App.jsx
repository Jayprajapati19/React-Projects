import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converteAmount, setConverteAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverteAmount(amount);
    setAmount(converteAmount);
  }



  return (
    <>
      <h1 className='text-3xl bg-orange-500'>
        Currency Convertor
      </h1>
    </>
  )
}

export default App
