import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slide = ({products,title,timer}) => {
    const renderer = ({hours,minutes,seconds}) => {
        return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>
    }
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <Box  sx={{marginTop:"10px",background:"white",}}>
        <Box display={"flex"} sx={{padding:"0px 20px",paddingBottom:"10px",paddingTop:"10px"}} >
            <Typography sx={{fontSize:"22px",fontWeight:"600",marginRight:"20px",lineHeight:"32px"}}>{title}</Typography>
            {timer &&  <Box display={"flex"} sx={{marginLeft:"10px",alignItems:"center",color:"#7f7f7f",marginBottom:0}}>
                <img src={timerURL} alt="timer" style={{width:24,marginTop:5,marginRight:5}} />
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer}></Countdown>
            </Box> }
            <Button sx={{marginLeft:'auto',backgroundColor:"#2874f0",borderRadius:"2px",height:"35px",marginTop:"2px",fontSize:"13px",fontWeight:"600"}} variant='contained' color="primary">view All</Button>
        </Box>
        <Divider/>
    <Carousel  keyBoardControl={true}  autoPlaySpeed={4000} autoPlay={true} infinite={true} swipeable={false}
    draggable={false} responsive={responsive} centerMode={true} containerClass="carousel-container" dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
        {products.map((product)=>(
           <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>
            <Box textAlign={"center"} sx={{padding:"25px 15px"}}>
                <img style={{width:"auto",height:150}} src={product.url} alt="product" />
                <Typography sx={{fontSize:"14px",marginTop:"5px",fontWeight:"600",color:"#212121"}}>{product.title.shortTitle} </Typography>
                <Typography sx={{fontSize:"14px",marginTop:"5px",color:"green"}}>{product.discount} </Typography>
                <Typography sx={{fontSize:"14px",marginTop:"5px",color:"#7f7f7f",}}>{product.tagline} </Typography>
            </Box>
           </Link>
        ))}
    </Carousel>
    </Box>
  )
}

export default Slide