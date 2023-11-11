import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { toggleSidebar } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { links } from '../utils/constants'
import { Link, NavLink } from 'react-router-dom'
import SignInButton from './SignInButton'

export const Navbar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggleThisSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <div
      className={
        ' text-black p-4 justify-between items-center max-w-[1240px] h-24 flex mx-auto align-middle'
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
        <SignInButton />
      </ul>

      <div className="m-8 hover:bg-white hover:text-black rounded-md">
        <button onClick={toggleThisSidebar}>
          <AiOutlineMenu className="w-8 h-6 mt-2" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
