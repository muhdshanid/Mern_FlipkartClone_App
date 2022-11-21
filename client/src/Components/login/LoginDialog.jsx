import React, { useContext } from 'react'
import {Box, Button, Dialog, TextField, Typography} from '@mui/material'
import { useState } from 'react'
import { authenticateLogin, authenticateSignup } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
const accountInitialValue = {
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },signup:{
        view:'signup',
        heading:"Looks like your new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}
const signupInitialValues = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:"",
}
const loginInitialValues ={
    username:"",
    password:""
}
const LoginDialog = ({open,setOpen}) => {
    const {accountt,setAccount} = useContext(DataContext)
    const [signup, setSignup] = useState(signupInitialValues)
    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }
    console.log(signup);
    const handleClose =() => {
        setOpen(false)
        toggleAccount(accountInitialValue.login)
        setError(false)
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup)
    }
    const signupUser = async() => {
     let res =   await authenticateSignup(signup)
     if(!res) return
     handleClose();
     setAccount(signup.firstname)
    }
    const [error, setError] = useState(false)
    const [account, toggleAccount] = useState(accountInitialValue.login)
    const [login, setLogin] = useState(loginInitialValues)
    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser = async () =>{
      const res = await  authenticateLogin(login)
      if(res.status === 200){
        handleClose();
        setAccount(res.data.data.firstname)
      }else{
        setError(true)
      }
        }
      return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
        <Box sx={{heigh:"70vh",maxWidth:"580px",overflow:"hidden"}}>
            <Box display={"flex"} sx={{height:"100%",width:"1000px"}}>
            <Box sx={{paddingTop:3,paddingLeft:5,paddingRight:8, overflow:'visible', background:"#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",height:"auto",width:account.view === "login" ? "10%" : "13%"}}>
                <Typography style={{color:"#fff"}} variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop:20,fontSize:"15px",color:"#fff"}} variant='h5'>{account.subHeading}</Typography>
            </Box>
           { account.view === 'login' ? <Box sx={{width:"30%",height:"450px",paddingLeft:"35px",paddingRight:"35px",paddingBottom:"25px"}}  display='flex' flexDirection={"column"}>
                <TextField   onChange={(e)=>onValueChange(e)} name="username" sx={{marginTop:"20px",fontWeight:"600"}} variant='standard' label="Enter Username"/>
               { error && <Typography sx={{fontSize:"10px",color:"#ff6161",lineHeight:"0",marginTop:'10px',fontWeight:"600"}}>Please enter valid username or password</Typography>}
                <TextField  onChange={(e)=>onValueChange(e)} name="password" sx={{marginTop:"20px"}} variant='standard' label="Enter Password"/>
                <Typography sx={{marginTop:"20px",color:"#878787",fontSize:"14px"}}>By continuing, you agree to flipkart's Terms of use and Privacy Policy</Typography>
                <Button onClick={()=>loginUser()} sx={{marginTop:"20px",fontSize:"17px",textTransform:"none",background:"#FB6418",color:"#fff",height:"48px",borderRadius:"2px"}}>Login</Button>
                <Typography sx={{marginTop:"20px",textAlign:"center"}}>OR</Typography>
                <Button sx={{marginTop:"20px",boxShadow:"0 2px 4px 0 rgb(0 0 0/20%)",textTransform:"none",background:"#fff",color:"#2874f0",height:"48px",borderRadius:"2px"}}>Request OTP</Button>
                <Button onClick={() => toggleSignup()} sx={{cursor:"pointer",textTransform:"none",marginTop:"20px",fontSize:"14px",textAlign:"center",color:"#2874f0",fontWeight:"600"}}>New to Flipkart? Create an account</Button>
            </Box>
            : <Box sx={{width:"28%",height:"450px",paddingLeft:"35px",paddingRight:"30px",paddingBottom:"50px"}}  display='flex' flexDirection={"column"}>
            <TextField onChange={(e)=>onInputChange(e)} name="firstname" sx={{marginTop:"20px",fontWeight:"600"}} variant='standard' label="Enter Firstname"/>
            <TextField onChange={(e)=>onInputChange(e)} name="lastname" sx={{marginTop:"20px"}} variant='standard' label="Enter Lastname"/>
            <TextField onChange={(e)=>onInputChange(e)} name="username" sx={{marginTop:"20px"}} variant='standard' label="Enter Username"/>
            <TextField onChange={(e)=>onInputChange(e)} name="email" sx={{marginTop:"20px"}} variant='standard' label="Enter Email"/>
            <TextField onChange={(e)=>onInputChange(e)} name="password" sx={{marginTop:"20px"}} variant='standard' label="Enter Password"/>
            <TextField onChange={(e)=>onInputChange(e)} name="phone" sx={{marginTop:"20px"}} variant='standard' label="Enter phone"/>
            <Button onClick={() =>signupUser()} sx={{marginTop:"20px",fontSize:"17px",textTransform:"none",
            background:"#FB6418",color:"#fff",height:"48px",borderRadius:"2px"}}>Continue
            </Button>
        </Box>}
            </Box>
        </Box>
    </Dialog>
  )
}

export default LoginDialog