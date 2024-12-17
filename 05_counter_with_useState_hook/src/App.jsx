import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  //let counter=15

  const addValue = () => {
    //counter = counter+1
    if(counter >= 20){
      window.alert("Range: 0<=counter<=20")
    }else {
      setCounter(counter+1)
    }
  }
  const removeValue = () => {
    //counter = counter+1
    if(counter <= 0){
      window.alert("Range: 0<=counter<=20")
    }else {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
