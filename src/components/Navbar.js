import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FcMenu } from 'react-icons/fc'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './Sidebar'
import { toggleSidebar } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { links } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggleThisSidebar = () => {
    dispatch(toggleSidebar())
  }
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  useEffect(() => {
    if(isAuthenticated){

      console.log(user)
    }
  }, [isAuthenticated])
  
  return (
    <div
      className={
        isSidebarOpen
          ? 'hidden'
          : 'text-white p-4 justify-between items-center max-w-[1240px] h-24 flex mx-auto align-middle'
      }
    >
      <h1 className="w-full text-3xl  text-cyan-300 font-bold">MOMO.</h1>
      <ul className="flex">
        {links.map((item) => {
          const { id, url, text } = item
          return (
            <li key={id} className="p-4">
              <NavLink to={url}>{text}</NavLink>
            </li>
          )
        })}
        {
          !isAuthenticated ? (
            <div className="hover:bg-white hover:text-black hover:rounded-3xl p-4  flex-shrink-0 ">
              <button className="flex-none" onClick={() => loginWithRedirect()}>
                Sign In
              </button>
            </div>
          ) : (
            <div className="hover:bg-white hover:text-black hover:rounded-3xl p-4  flex-shrink-0 ">
              <button className="flex-none" onClick={() => logout()}>
                Sign Out
              </button>
            </div>
          )
          // <div className="hover:bg-white hover:text-black hover:rounded-3xl p-4  flex-shrink-0 ">
          //   <button className="flex-none" onClick={() => loginWithRedirect() }>Sign In</button>
          // </div>
        }
      </ul>

      <div className="m-8 hover:bg-white hover:text-black rounded-md">
        <button onClick={toggleThisSidebar}>
          <AiOutlineMenu className="w-8 h-6 mt-2" />
        </button>
      </div>
    </div>
  )
}
