import React from 'react'

export const Counter = () => {
  let counter = 100;

  // The onClick method send as parameter an event
  // const method = event => ...;
  const handleIncrement = () => counter++;
  const handleDecrement = () => counter--;

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <button onClick={handleIncrement} className="btn btn-outline-success">
        +
      </button>

      <button onClick={handleDecrement} className="btn btn-outline-danger mx-3">
        -
      </button>

      <button onClick={() => counter = 100} className="btn btn-outline-primary">
        Reset
      </button>
    </>
  )
}
