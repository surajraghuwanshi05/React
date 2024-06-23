import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue =  ()=>{
    setCounter(counter + 1)
  }

  const removeValue =()=>{
    setCounter(counter -1)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button
     onClick={addValue}>Add value{counter}</button>
     <br />
     <button
     onClick={removeValue}>remove value{counter - 1 }</button>
    </>
  )
}

export default App
