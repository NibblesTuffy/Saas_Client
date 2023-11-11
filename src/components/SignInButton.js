import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../features/user/userSlice'
const SignInButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      if (user) {
        console.log(user)
        const { name, email } = user
        console.log({name, user});
        dispatch(addUser({ name, email }))
      }
    }
  }, [isAuthenticated])

  if (isAuthenticated) {
    return (
      <div className="hover:bg-white hover:text-black hover:rounded-3xl p-4  flex-shrink-0 ">
        <button
          className="flex-none"
          onClick={() => {
            logout()
            removeUser()
          }}
        >
          Sign Out
        </button>
      </div>
    )
  } else {
    return (
      <div className="hover:bg-white hover:text-black hover:rounded-3xl p-4  flex-shrink-0 ">
        <button className="flex-none" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </div>
    )
  }
}

export default SignInButton
