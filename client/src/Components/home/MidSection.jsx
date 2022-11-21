import { Grid } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constans/data'
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
    <Grid sx={{marginTop:"10px",justifyContent:"space-between"}} lg={12} sm={12} md={12} xs={12} container>
        {
            imageURL.map((img) =>(
              <Grid item lg={4} md={4} sm={12} xs={12}>
                  <img src={img} alt="image" style={{width:"100%"}} />
                </Grid>
            ))
        }
    </Grid>
    <img  style={{marginTop:10,width:"100%",display:"flex",justifyContent:"space-between"}} src={url} alt="covid" />
    </>
  )
}

export default MidSection