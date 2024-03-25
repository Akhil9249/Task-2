import React from 'react'

function Counter({onIncrement,onDecrement,count}) {
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={onIncrement} >Increment</button>
      <button onClick={onDecrement} >Decrement</button>
    </div>
  )
}

export default Counter
