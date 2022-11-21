import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'

const Cart = () => {
    const {cartItems} = useSelector(state => state.cart)
  return (
    <>
    {cartItems.length ? 
       <Grid sx={{padding:"30px 135px"}} container>
        <Grid sx={{paddingRight:"15px"}}  item lg={9} md={9} sm={12} xs={12}>
            <Box sx={{padding:"15px 24px",backgroundColor:"#fff"}}>
                <Typography>My Cart({cartItems.length})</Typography>
            </Box>
            {
                cartItems.map((item) => (
                    <CartItem item={item}/>
                ))
            }

            <Box sx={{padding:"16px 22px",background:"#fff",boxShadow:"0 -2px 10px 0 rgb(0 0 0/10%)",borderTop:"1px solid #f0f0f0"}}>
                <Button  sx={{display:"flex",marginLeft:"auto",background:"#fb641b",color:'#fff',width:"250px"
            ,height:"51px",borderRadius:"2px"}}>Place Order</Button>
            </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems ={cartItems}/>
        </Grid>
       </Grid>
       : <EmptyCart/>
    }
    </>
  )
}

export default Cart