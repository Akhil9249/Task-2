import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const onIncrement= ()=>{
    if(count<10){
      setCount((prev)=>prev+1 )
    }
  }

    const onDecrement= ()=>{

      if(count>0){
        setCount((prev)=>prev-1 )
      }
  }

  return (
    <>
      <h1>Count Show</h1>
      <Counter onIncrement={onIncrement} onDecrement={onDecrement} count={count}/>
    </>
  )
}

export default App
