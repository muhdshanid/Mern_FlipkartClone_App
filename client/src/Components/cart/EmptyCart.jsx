import { Box, Typography } from '@mui/material'
import React from 'react'

const EmptyCart = () => {
    
const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Box sx={{height:"65vh",width:"80%",background:"#fff",margin:"80px 140px"}}>
        <Box sx={{paddingTop:"70px"}} textAlign='center'>
            <img style={{width:"15%"}} src={imgurl} alt="empty" />
            <Typography>Your Cart is empty</Typography>
            <Typography>Add items to it now</Typography>
        </Box>
    </Box>
  )
}

export default EmptyCart