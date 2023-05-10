import React, { useState } from 'react'
import { CounterButton } from '../counterButton/CounterButton';

export const Counter = ({initialValue = 0, increment = 1, decrement = 1}) => {
  console.log("Counter Component Rendering...");

  // Hook, updates the component when something change
  // useState(value) returns [readOnlyValue, setterCallbackMethod]
  const [counter, setcounter] = useState(initialValue);

  // Setcounter reloads or renders again the component
  // But the useState line doesn't execute in the next times
  // setcounter(newValue);

  // So counter variable is not changing immediately
  console.log(counter);

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <CounterButton hookMethod={setcounter} newValue={counter+increment} color="green">
        +
      </CounterButton>

      <CounterButton hookMethod={setcounter} newValue={counter-decrement} color="red">
        -
      </CounterButton>

      <CounterButton hookMethod={setcounter} newValue={initialValue} color="blue">
        Reset
      </CounterButton>

      <CounterButton hookMethod={setcounter} newValue={Infinity}>
        Set Counter to Infinity
      </CounterButton>
    </>
  )
}
