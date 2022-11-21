import { Box, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constans/data'

const Navbar = () => {
  return (
    <Box sx={{backgroundColor:"#fff"}}>
    <Box display={"flex"} margin='55px 130px 0 130px' justifyContent={"space-between"} >
        {navData.map((data) => (
            <Box sx={{padding:"18px 8px"}} textAlign='center'>
                <img style={{width:64}} src={data.url} alt="nav" />
                <Typography sx={{marginTop:0,fontSize:"14px",fontWeight:"600",fontFamily:"inherit"}}>{data.text}</Typography>
            </Box>
        ))}
    </Box>
    </Box>
  )
}

export default Navbar