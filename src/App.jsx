import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addValue = () => {
    setCount(count + 5)
  }

  const removeValue = () => {
    setCount(count - 5)
  }

  return (
    <>
      <h1>Annabel's Counter: {count} </h1>
      <h2>Counter: {count}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>Counter: {count}</footer>
    </>
  )
}

export default App
