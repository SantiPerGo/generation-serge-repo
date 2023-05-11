import React, { useState } from 'react'
import { CounterButton } from '../counterButton/CounterButton';

// Material UI Dependencies
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { ButtonGroup, Typography, Container, Grid } from '@mui/material';
import { purple, pink } from '@mui/material/colors';

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

  // Material UI components
  return (
    <>
      {/* Sx = similar to Style for css */}
      <Container maxWidth="sm" sx={{border:2, bgcolor:"lightgray"}}>
        <Grid container spacing={2}>

          <Grid md={8} xs={12}>
            <Typography color={purple[700]} variant="h1" align="center">
              Counter
            </Typography>
          </Grid>

          <Grid sx={{m:0, bgcolor:"gray", color:"white"}} md={4} xs={12}>
            <Typography color={pink[50]} variant="h2" align="center">
              {counter}
            </Typography>
          </Grid>

          <Grid md={12}>
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <CounterButton icon={<AddIcon />} hookMethod={setcounter} newValue={counter+increment} color="green" />
              <CounterButton icon={<RemoveIcon />} hookMethod={setcounter} newValue={counter-decrement} color="red" />
              <CounterButton icon={<RestartAltIcon />} hookMethod={setcounter} newValue={initialValue} color="blue" />
              <CounterButton icon={<AllInclusiveIcon />} hookMethod={setcounter} newValue={Infinity} />
            </ButtonGroup>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}
