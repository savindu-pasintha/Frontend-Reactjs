import React, { useRef, useState } from 'react'
import {GoogleLogin} from 'react-google-login'
import { CLIENT_ID } from '../../../env'
import styled, { css } from "styled-components";
import { style } from '@mui/system';
import './Styles.css'
import { useDispatch } from 'react-redux';
import { deleteProfileAction, setProfileAction } from '../../StatesManagement/reducers/UserSigninReducerslice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// import dotenv from 'dotenv'
// dotenv.config() 


const OAuthLogin = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const isUserInteracted= useRef(false);

    const onSuccess =(res)=>{
      console.log("21",res,isUserInteracted.current)
      if(isUserInteracted.current){
        
        localStorage.setItem("active_user",true)
        dispatch(setProfileAction(res))
        toast.success('Success Full', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        isUserInteracted.current = false
        navigate("/todo")
      }
     
    }

    const onFailure =(res)=>{
      dispatch(deleteProfileAction(res))
      localStorage.setItem("active_user",false)
      toast.error('Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate("/login")
    }

 
  return (
    <div className='btnContainer'  onClick={(e) => {isUserInteracted.current = true; console.log(isUserInteracted.current);} }>
      <GoogleLogin
      style={{maxwidth:'150px'}}
      clientId={CLIENT_ID}
      buttonText="LOGIN"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          id="oAuthBtn"
        >
          Login with Google
        </button>
      )}
    /></div>
  )
}


export default OAuthLogin