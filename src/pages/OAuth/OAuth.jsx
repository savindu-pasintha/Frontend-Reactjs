import React, { useEffect, useState } from 'react'
import OAuthLogin from '../../component/0Auth/OAuthLogin'
import OAuthLogout from '../../component/0Auth/OAuthLogout'
import { gapi } from 'gapi-script'
import { CLIENT_ID } from '../../../env'
import { useSelector } from 'react-redux'

const OAuth = () => {
    const [isPageLoaded, setIsPageLoaded] = useState(false);
   const getProfile = useSelector(state=>state.profile)
  
    useEffect(()=>{
        const start =()=>{
            gapi.client.init({
                clientId:CLIENT_ID,
                scope:""
            })
        }
        gapi.load('client:auth2',start)
    },[])

    useEffect(() => {
        setIsPageLoaded(true);
      }, []);

    // const accessTokne = gapi.auth.getToken().access_token
  return isPageLoaded && (
    <div className="container">
    
        <div className="row">
          <OAuthLogin />
        </div>
      
        <div className="row">
          <OAuthLogout />
        </div>
     
    </div>
  );
}

export default OAuth