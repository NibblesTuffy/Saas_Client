import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { toggleSidebar } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { links } from '../utils/constants'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggleThisSidebar = () => {
    dispatch(toggleSidebar())
  }
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
  return (
    <div
      className={
        isSidebarOpen
          ? 'text-white fixed w-[25%] h-screen left-0 -top-24 border-r border-b border-gray-900 bg-black'
          : 'text-white fixed w-[25%] h-screen left-0 -top-24  bg-black hidden '
      }
    >
      <h1 className="fixed left-8 top-8 w-full text-3xl text-cyan-300 font-bold">
        MOMO.
      </h1>
      <div className="fixed left-[23%] top-4 ">
        <button onClick={toggleThisSidebar}>
          <FaTimesCircle />
        </button>
      </div>
      <ul className="fixed flex flex-col top-24 left-8">
        {links.map((item) => {
          const { id, text, url } = item
          return (
            <NavLink to={url} key={id} className="p-4 border-b border-gray-300">
              {text}
            </NavLink>
          )
        })}
        {isAuthenticated ? (
          <NavLink
            onClick={() => logout()}
            className="p-4 border-b text-white border-gray-300"
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink
            onClick={() => loginWithRedirect()}
            className="p-4 border-b text-white border-gray-300"
          >
            Sign In
          </NavLink>
        )}
      </ul>
    </div>
  )
}

export default Sidebar
