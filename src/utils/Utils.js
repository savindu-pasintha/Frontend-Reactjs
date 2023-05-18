import React from 'react'

export const validateUserName = (userName)=>{
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  return usernameRegex.test(userName);
} 

export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

export const validatePassword = (password) =>{
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    // return passwordRegex.test(password);
    return true
}