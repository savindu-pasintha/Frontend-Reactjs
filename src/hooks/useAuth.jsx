import React from 'react'

export const useAuth = () => {
	const user = localStorage.getItem("active_user")
	console.log(user)
	return user == "true" ? true : false
}
