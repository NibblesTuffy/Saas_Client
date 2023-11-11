import React, { useEffect, useState } from 'react'
import { cards } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentSubscription } from '../features/user/userSlice'
const Cards = ({ref}) => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log(ref.current)
  // }, [ref])
  console.log('in cards');
  console.log(ref);
  return (
    <div class="flex items-center justify-center h-full flex-col bg-[#E5E5E5] min-h-screen ">
      <div class="bg-cyan-100 p-10 rounded-xl  ">
        <div class="flex flex-col justify-center items-center text-center">
          <div class="max-w-sm font-bold font-sans">
            if you are now our members, click{' '}
            <span>
              <button
                className="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-2 py-2 text-center me-1 mb-2 mt-1 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800"
                onClick={() => {
                  if (user !== null) {
                    if (user.email !== undefined) {
                      console.log('in click here')
                      console.log(user.email)
                      dispatch(getCurrentSubscription(user.email))
                    }
                  } else {
                    toast.error('Please sign in first.')
                  }
                }}
              >
                here
              </button>
            </span>{' '}
            to show your current subscription.
          </div>
          <div class="max-w-sm font-bold font-sans text-green-500 text-2xl">
            OR
          </div>
          <div class="max-w-sm font-bold font-sans">
            Get the most out of your store with the right subscription
          </div>
          <div class="font-light max-w-lg mt-5 mb-4 text-sm">
            All subscription can be used within 24 hours
          </div>
        </div>

        <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10 ">
          {cards.map((card) => {
            const { id, img_src, price, description, level } = card
            return (
              <div class="bg-cyan-200 rounded-xl ">
                <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                  <img src={img_src} class="w-8" />
                  <div class="mt-3 font-semibold text-lg">{level}</div>
                  <div class="text-sm font-light">{description}</div>
                  <div class="my-4">
                    <span class="font-bold text-base">{price}</span>
                    <span class="font-light text-sm">/month</span>
                  </div>

                  {user === null ? (
                    <div
                    // action={
                    //   process.env.REACT_APP_SERVER_ADDRESS + '/checkout'
                    // }
                    // method="POST"
                    >
                      {/* Add a hidden field with the lookup_key of your Price */}
                      {/* <input type="hidden" name="lookup_key" value={level} /> */}
                      {/* <input
                        type="hidden"
                        name="user"
                        value={JSON.stringify(user)}
                      /> */}
                      <button
                        id="checkout-and-portal-button"
                        // type="submit"
                        className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
                        onClick={() => {
                          console.log('⚠ please sign in first')
                          toast.error('⚠ please sign in first')
                        }}
                      >
                        Add subscription
                      </button>
                    </div>
                  ) : (
                    <form
                      action={
                        process.env.REACT_APP_SERVER_ADDRESS + '/checkout'
                      }
                      method="POST"
                    >
                      {/* Add a hidden field with the lookup_key of your Price */}
                      <input type="hidden" name="lookup_key" value={level} />
                      <input
                        type="hidden"
                        name="user"
                        value={JSON.stringify(user)}
                      />
                      <button
                        id="checkout-and-portal-button"
                        type="submit"
                        className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
                        // onClick={() => handleSubmit(level)}
                      >
                        Add subscription
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Cards)
