import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const TotalView = ({cartItems}) => {
    useEffect(() => {
        totalAmount();
    },[cartItems])
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const totalAmount = () => {
        let  price = 0, discount=0;
        cartItems.map((item) => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost)
         });
         setPrice(price)
         setDiscount(discount)
    }
  return (
    <Box sx={{width:"250px"}}>
        <Box sx={{padding:"15px 24px",background:"#fff",borderBottom:"1px solid #f0f0f0"}}>
            <Typography sx={{color:"#878787"}}>PRICE DETAILS</Typography>
        </Box>
        <Box sx={{padding:"15px 24px",background:"#fff"}}>
            <Typography sx={{marginBottom:"20px",fontSize:"14px"}}>Price ({cartItems?.length} item)
            <Box sx={{float:"right"}}  component={"span"}>₹{price}</Box>
            </Typography>
            <Typography sx={{marginBottom:"20px",fontSize:"14px"}}>Discount
            <Box sx={{float:"right"}} component={"span"}>-₹{discount}</Box>
            </Typography>
            <Typography sx={{marginBottom:"20px",fontSize:"14px"}}>Delivery Charges 
            <Box sx={{float:"right"}} component={"span"}>₹40</Box>
            </Typography>
            <Typography variant='h6' sx={{marginBottom:"20px"}}> Total Amount
            <Box sx={{float:"right"}} component={"span"}>₹{price - discount +40}</Box>
            </Typography>
            <Typography sx={{marginBottom:"20px",fontSize:"14px",color:"green",fontWeight:"500"}}>You will save ₹{discount-40} on this order</Typography>
        </Box>
    </Box>
  )
}

export default TotalView