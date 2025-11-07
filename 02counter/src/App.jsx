import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter>=10){
      alert("Counter cannot be more than 10")
      return
    }
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    

    console.log(counter)
  }

  const removeValue = () => {
    if(counter<=0){
      alert("Counter cannot be less than 0")
      return
    }
    setCounter(counter - 1)
    console.log(counter)
  }

  return (
    <>
      
      
     <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove value</button>
     
      
    </>
  )
}

export default App
