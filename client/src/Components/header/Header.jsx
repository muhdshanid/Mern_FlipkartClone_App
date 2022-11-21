import React from 'react'
import {AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography} from '@mui/material'
import { Box, } from '@mui/system'
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const Header = () => {
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const handleOpen = () => {
        setOpen(true)
    }
    const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const list = () => {
    <Box sx={{width:"200px"}} onClick={handleClose}>
        <List>
            <ListItem button>
                <CustomButtons/>
            </ListItem>
        </List>
    </Box>
  }
    return (
    <AppBar sx={{
        background:"#2874f0",
        height:"55px",
        position:"absolute"
    }}>
        <Toolbar style={{minHeight:"55px"}}>
        <IconButton sx={{display:"none",color:"inherit"}} onClick={handleOpen}>
          <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
            <Link to={"/"} style={{marginLeft:"12%",lineheight:"0",textDecoration:"none",color:"inherit"}}>
                <img src={logoURL} alt="logo" style={{width:75}} />
                <Box sx={{display:"flex"}}>
                    <Typography sx={{fontSize:'12px',fontStyle:"italic"}}>Explore &nbsp; 
                    <Box sx={{color:'#FFE500'}} component={"span"}>Plus</Box> </Typography>
                    <img style={{width:10,height:10,marginLeft:4}} src={subURL} alt="sub-logo" />
                </Box>
            </Link>
            <Search/>
            <Box sx={{marginLeft:"auto"}}>
                <CustomButtons/>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header