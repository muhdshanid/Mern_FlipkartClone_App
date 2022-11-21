import { InputBase, List, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
const Search = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getProducts())
  },[dispatch]
  )
  const {products} = useSelector((state)=>state.getProducts)
  const [inputs, setInputs] = useState("")
  const getText = (text) => {
    setInputs(text)
  }
  return (
    <Box display={"flex"} sx={{background:"#fff",width:"38%",borderRadius:"2px",marginLeft:"10px"}}>
    <InputBase sx={{paddingLeft:"10px",width:"100%",fontStyle:"unset"}} value={inputs} onChange={(e) => getText(e.target.value)} placeholder='Search for products, brands and more'/>
    <Box sx={{color:"#2874f0",paddingTop:"5px",marginRight:"8px"}}>
      <SearchIcon/>
    </Box>
    {inputs &&
     <List sx={{position:"absolute",background:"white",color:"#000",marginTop:"36px"}}>
      {
        products.filter((product)=>product.title.longTitle.toLowerCase().includes(inputs.toLowerCase())
        ).map((product)=>(
          <ListItem >
            <Link to={`/product/${product.id}`}  onClick={()=>setInputs("")} style={{textDecoration:"none",color:"inherit"}}>
            {product.title.longTitle}
            </Link>
          </ListItem>
        ))
      }
      </List>}
    </Box>
  )
}

export default Search