import React from 'react'
import { useSelector } from 'react-redux'

export const User = () => {
  
  const user = useSelector((state: any) => state.user.currentUser.user);
  return (
    <div>{user?.username}</div>
  )
}
