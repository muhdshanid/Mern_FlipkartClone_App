import { Box,ButtonGroup, Button } from '@mui/material'
import React from 'react'

const ButtonGroups = () => {
  return (
    <ButtonGroup sx={{marginTop:"30px"}}>
        <Button sx={{borderRadius:"50%"}}>-</Button>
        <Button sx={{borderRadius:"50%"}}>1</Button>
        <Button sx={{borderRadius:"50%"}}>+</Button>
    </ButtonGroup>
  )
}

export default ButtonGroups