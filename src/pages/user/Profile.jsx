import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState(null);

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("user_data"))
        if(userData !== null){
            setPhoto(userData?.photo)
            setEmail(atob(userData?.email))
            setPassword(atob(userData?.password))
            setUsername(userData?.username)
        }else{
            navigate("/user/login")
        }
    },[])
    return (
        <div> 
            <h2>Profile</h2>
            <div>
               <img src={photo ? photo : "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"} alt="User's profile photo" />
            </div>
            <div>
                <label>Username:</label>
                <span>{username}</span>
            </div>
            <div>
                <label>Email:</label>
                <span>{email}</span>
            </div>
            <div>
                <label>Password:</label>
                <span>{password}</span>
            </div>
           
        </div>
    )
}

export default Profile