import React from 'react'

export const CounterButton = ({hookMethod, newValue, color, children: text}) => {
  let classStr = "btn me-3 btn-outline-";
  
  switch(color) {
    case "red":
        classStr += "danger";
        break;
    case "blue":
        classStr += "primary";
        break;
    case "green":
        classStr += "success";
        break;
    default:
        classStr += "secondary";
        break;
  }

  return (
    <>
      {/*
        The onClick method send as parameter an event 
        const functionName = event => ...;
      */}
      <button onClick={() => hookMethod(newValue)} className={classStr}>
        {text}
      </button>
    </>
  )
}
