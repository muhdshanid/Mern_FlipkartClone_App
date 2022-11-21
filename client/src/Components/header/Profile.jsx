import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Profile = ({account,setAccount}) => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const logout = () =>{
        setAccount("")
    }
  return (
    <>
    <Box onClick={handleClick}>
    <Typography sx={{marginRight:"40px",fontSize:"16px",color:"white",cursor:"pointer"}}>{account}</Typography>
    <Menu sx={{marginTop:1}}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose} >
        <MenuItem onClick={()=>{handleClose();logout();}}><PowerSettingsNewIcon sx={{color:"#2874f0"}} fontSize='small'/><Typography sx={{fontSize:"14px",marginLeft:"10px"}}>Logout</Typography>  </MenuItem>
      </Menu>
    </Box>
    </>
  )
}

export default Profile