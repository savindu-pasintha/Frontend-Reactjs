import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { CLIENT_ID } from '../../../env'
import styled, { css } from "styled-components";
import { style } from '@mui/system';
import './Styles.css'
// import dotenv from 'dotenv'
// dotenv.config() 


const OAuthLogin = () => {
    const onSuccess =(res)=>{
        console.log("success",res.profileObj)
    }

    const onFailure =(res)=>{
        console.log("failed",res)
    }

 
  return (
    <div className='btnContainer'>
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