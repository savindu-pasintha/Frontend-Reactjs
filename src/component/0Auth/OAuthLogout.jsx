import React from 'react'
import {GoogleLogout} from 'react-google-login'
import { CLIENT_ID } from '../../../env'
import './Styles.css'
// import dotenv from 'dotenv'
// dotenv.config() 


const OAuthLogout = () => {
   
    const onSuccess =(res)=>{
        console.log("success",res)
    }

    
    const onFailure =()=>{
        console.log("failed",res)
    }
  return (
    <div  className="btnContainer"><GoogleLogout
       id="oAuthBtn"
      clientId={CLIENT_ID}
      buttonText="LOG OUT"
      onLogoutSucces={onSuccess}
     onFailure={onFailure}
    render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          id="oAuthBtn"
        >
          Log Out in Google
        </button>
      )}
     
    /></div>
  )
}

export default OAuthLogout