import { Button } from '@mui/material';
import React from 'react'

export const CounterButton = ({hookMethod, newValue, color, icon}) => {
  let colorStr;
  
  switch(color) {
    case "red":
        colorStr = "error";
        break;
    case "blue":
        colorStr = "info";
        break;
    case "green":
        colorStr = "success";
        break;
    default:
        colorStr = "secondary";
        break;
  }

  return (
    <>
      {/*
        The onClick method send as parameter an event 
        const functionName = event => ...;
      */}
      <Button onClick={() => hookMethod(newValue)} color={colorStr}
          variant="contained" startIcon={icon} />
    </>
  )
}
