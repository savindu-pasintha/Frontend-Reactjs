import React from 'react'
import {GoogleLogout} from 'react-google-login'
import { CLIENT_ID } from '../../../env'
import './Styles.css'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
// import dotenv from 'dotenv'
// dotenv.config() 


const OAuthLogout = () => {
    const navigate = useNavigate()
   
    const onSuccess =()=>{
        localStorage.setItem("active_user",false)
        toast.success('Success Full Log Out', {
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

    
    const onFailure =()=>{
        localStorage.setItem("active_user",false)
        toast.success('Un-Success Full Log Out', {
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
    <div  className="btnContainer" onClick={(e)=>onSuccess()}><div
       
    //    id="oAuthBtn"
    //   clientId={CLIENT_ID}
    //   buttonText="LOG OUT"
    //   onLogoutSucces={onSuccess}
    //   onFailure={onFailure}
    //   render={(renderProps) => (
    //     <button
    //       onClick={renderProps.onClick}
    //       disabled={renderProps.disabled}
    //       id="oAuthBtn"
    //     >
    //       Log Out in Google
    //     </button>
    //   )}
     
    >Log Out in Google</div></div>
  )
}

export default OAuthLogout