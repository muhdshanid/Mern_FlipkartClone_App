import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import { useSelector } from 'react-redux'
import { Box, Grid, Typography } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'
const DetailView = () => {
    const {loading,product} = useSelector((state)=>state.getProductDetails)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        if(product && id !== product.id)
        dispatch(getProductDetails(id))
    },[dispatch,id,product,loading])
  return (
    <Box sx={{background:"#f2f2f2",marginTop:"55px"}}>
        {
             product && Object.keys(product).length &&
            <Grid sx={{background:"white",display:"flex"}} container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>
                </Grid>
                <Grid sx={{marginTop:"50px"}} item lg={8} md={8} sm={8} xs={12}>
                     <ProductDetail product={product}/>
                </Grid>
            </Grid>
        }
    </Box>
  )
}

export default DetailView