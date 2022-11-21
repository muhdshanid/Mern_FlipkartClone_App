import { Box } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const MidSlide = ({products,title,timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Box display={"flex"}>
        <Box sx={{width:"83%"}}>
        <Slide products={products} title={title} timer={timer}/>
        </Box>
        <Box sx={{backgroundColor:"white",padding:"0px 5px",marginTop:"10px",marginLeft:"10px",width:"15%",textAlign:"center"}}>
            <img src={adURL} alt="ad" style={{width:190,height:"347px",marginRight:5,marginTop:6}} />
        </Box>
    </Box>
  )
}

export default MidSlide