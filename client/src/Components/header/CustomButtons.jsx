import { Badge, Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CustomButtons = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const [open, setOpen] = useState(false)
  const openDialog = () => {
    setOpen(true)
  }
  const {account,setAccount} = useContext(DataContext)
  return (
    <Box display={"flex"} margin="0 3% 0 auto" alignItems={"center"}>
      {
        account ? <Profile account={account} setAccount={setAccount}/> :
        <Button sx={{height:"32px",padding:"5px 40px",borderRadius:'2px'
        ,boxShadow:"none",fontWeight:'600',marginRight:"40px",fontSize:"16px",
        background:"white",color:"#2874f0",textTransform:"none"}} variant='contained' onClick={() => openDialog()}>Login</Button>
      }
       
        <Typography sx={{marginRight:"40px",fontSize:"16px",width:135}} >Become a Seller</Typography>
        <Typography sx={{marginRight:"40px",fontSize:"16px"}}>More</Typography>
        <Link to="/cart" style={{textDecoration:'none',color:"inherit",display:"flex"}}>
          <Badge badgeContent={cartItems?.length} color='secondary'>
            <ShoppingCartIcon sx={{}}/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Box>
  )
}

export default CustomButtons