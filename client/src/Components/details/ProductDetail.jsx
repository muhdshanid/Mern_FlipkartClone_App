import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime()+(5*24*60*60*1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <>
    <Typography>{product.title.longTitle}</Typography>
                    <Typography sx={{marginTop:1,color:"#878787",fontSize:14}}>8 Ratings & 1 Review
                    <Box component={"span"}>
                        <img src={fassured}  style={{width:77,marginLeft:20}} alt="" /> 
                    </Box>
                     </Typography>
                     <Typography>
                        <Box component={"span"} sx={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component={"span"} sx={{color:"#878787"}}> <strike>₹{product.price.mrp} </strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component={"span"} sx={{color:"#388E3C"}}>{product.price.discount} </Box>
                     </Typography>
                     <Typography>Available Offers</Typography>
                     <Box>
                        <Typography sx={{fontSize:"14px",marginTop:"8px"}}><LocalOfferIcon sx={{marginRight:"10px",color:"#00CC00",fontSize:"15px",verticalAlign:"baseline",marginTop:"6px"}} /> Get extra 20% off upto ₹50 on 1 item(s) T%C</Typography>
                        <Typography sx={{fontSize:"14px",marginTop:"8px"}}><LocalOfferIcon sx={{marginRight:"10px",color:"#00CC00",fontSize:"15px",verticalAlign:"baseline",marginTop:"6px"}} /> Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More</Typography>
                        <Typography sx={{fontSize:"14px",marginTop:"8px"}}><LocalOfferIcon sx={{marginRight:"10px",color:"#00CC00",fontSize:"15px",verticalAlign:"baseline",marginTop:"6px"}} /> Partner OfferBuy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typography>
                        <Typography sx={{fontSize:"14px",marginTop:"8px"}}><LocalOfferIcon sx={{marginRight:"10px",color:"#00CC00",fontSize:"15px",verticalAlign:"baseline",marginTop:"6px"}} /> Special PriceGet extra 31% off (price inclusive of cashback/coupon)T&C</Typography>
                        <Typography sx={{fontSize:"14px",marginTop:"8px"}}><EventAvailableIcon sx={{marginRight:"10px",color:"#00CC00",fontSize:"15px",verticalAlign:"baseline",marginTop:"6px"}} /> EMI starting from ₹382/monthView Plans</Typography>
                     </Box>
                     <Table>
                        <TableBody>
                            <TableRow >
                                <TableCell sx={{color:"#878787",border:"none"}}>Delivery</TableCell>
                                <TableCell sx={{fontWeight:"600",border:"none"}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{color:"#878787",border:"none"}}>Warranty</TableCell>
                                <TableCell sx={{border:"none"}}>No Warranty</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{color:"#878787",border:"none"}}>Seller</TableCell>
                                <TableCell sx={{border:"none"}}>
                                    <Box sx={{color:"#2874f0",fontSize:"14px"}} component={"span"}>SuperComNet</Box>
                                    <Typography sx={{fontSize:"14px"}}>GST invoice available</Typography>
                                    <Typography sx={{fontSize:"14px"}}>View more sellers starting from ₹{product.price.cost} </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{border:"none"}} colSpan={2}>
                                    <img src={adURL} alt="flipkartPoints" style={{width:390}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{color:"#878787",border:"none"}}>Description</TableCell>
                                <TableCell sx={{border:"none"}}>{product.description} </TableCell>
                            </TableRow>
                        </TableBody>
                     </Table>
    </>
  )
}

export default ProductDetail