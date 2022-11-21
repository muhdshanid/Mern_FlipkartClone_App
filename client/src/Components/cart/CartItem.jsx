import { Box, Button,Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartActions'
import { addEllipsis } from '../../utils/common-utils'
import ButtonGroups from './ButtonGroup'

const CartItem = ({item}) => {
    const [itemm,setItemm] = useState(item)
    const dispatch =  useDispatch()
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <Box sx={{borderTop:"1px solid #f0f0f0",display:"flex",backgroundColor:"#fff"}}>
        <Box display={"flex"} flexDirection="column" sx={{margin:"20px"}}>
            <img src={item.url} alt="product" style={{height:110,width:110}} />
            <ButtonGroups setItem={setItemm} itemm={itemm}/>
        </Box>
        <Box sx={{margin:"20px"}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <Typography sx={{color:"#878787",fontSize:"14px",marginTop:"10px"}}>Seller:RetailNet 
                <Box component={'span'}>
                    <img src={fassured} alt="flipkart" style={{width:50,marginLeft:"10px"}} />
                </Box>
            </Typography>
            <Typography sx={{margin:"20px 0px"}}>
                        <Box component={"span"} sx={{fontWeight:"600",fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component={"span"} sx={{color:"#878787"}}> <strike>₹{item.price.mrp} </strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component={"span"} sx={{color:"#388E3C"}}>{item.price.discount} </Box>
                     </Typography>
                     <Button onClick={() => removeItemFromCart(item.id)} sx={{marginTop:"20px",fontSize:"16px",color:"#000",fontWeight:"600"}}>Remove</Button>
        </Box>
    </Box>
  )
}

export default CartItem