import { Box, Button } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
const ActionItem = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const {id} = product
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const butNow = () => {
   let res =  payUsingPaytm({amount:500,email:'shani01@gmail.com'})
   let information = {
    action: 'https://securegw-stage.paytm.in/order/process',
    params:res
   }
   post(information)
  }
  const addItemToCart = () => {
    dispatch(addToCart(id,quantity))
    navigate("/cart")
  }
  return (
    <Box sx={{minWidth:"40%",padding:"40px 0 0 80px"}}>
      <Box sx={{padding:"15px 20px",border:'1px solid #f0f0f0',width:"85%",}}>
        <img style={{padding:"15px",width:"90%"}} src={product.detailUrl} alt="product" />
        </Box>
        <Button sx={{width:"47%",height:"50px",borderRadius:"2px",marginRight:"10px",background:"#ff9f00"}} variant='contained' onClick={() => addItemToCart()}><ShoppingCartIcon/> Add to Cart</Button>
        <Button sx={{width:"47%",height:"50px",borderRadius:"2px",background:"#fb541b"}} variant='contained' onClick={() => butNow()}><FlashOnIcon/> Buy Now</Button>
    </Box>
  )
}

export default ActionItem