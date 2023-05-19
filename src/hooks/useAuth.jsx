import React from 'react'

export const useAuth = () => {
	const user = localStorage.getItem("active_user")
	return user ? true : false
}
