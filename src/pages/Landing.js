import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import { getCurrentSubscription } from '../features/user/userSlice'
import SuccessDisplay from '../components/SuccessDisplay'
import Message from '../components/Message'
import { useSelector, useDispatch } from 'react-redux'
import { CurrentUserDisplay } from '../components'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Landing = () => {
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  let [message, setMessage] = useState('')
  let [success, setSuccess] = useState(false)
  let [sessionId, setSessionId] = useState('')
  const navigate = useNavigate()
  const ref = useRef(null)

  const handleScroll = () => {
    console.log('get start')
    ref.current?.scrollIntoView()
  }
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setSuccess(true)
      setSessionId(query.get('session_id'))
    }

    if (query.get('canceled')) {
      setSuccess(false)
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [sessionId])

  //check if it is a successful checkout page
  if (success && sessionId !== '') {
    return (
      <>
        <Hero click={handleScroll} />
        {/* <SuccessDisplay sessionId={sessionId} /> */}
        <>
          <h4>Congrats! You have subscribed successfully!</h4>
          <button
            onClick={() => {
              dispatch(getCurrentSubscription(user.email))
              navigate('/')
            }}
          >
            click to return to home page
          </button>
        </>
      </>
    )
  } else if (!success && message === '') {
    if (user !== null) {
      console.log('here is user')
      const { email } = user
      console.log(user)
      // dispatch(getCurrentSubscription(email))
      if (isLoading) {
        return <>Loading...</>
      }

      if (user.subscription !== undefined) {
        // console.log(user.subscription)
        return (
          <div className="flex justify-center">
            <CurrentUserDisplay currentSubscription={user.subscription} />
          </div>
        )
      } else {
        return (
          <>
            <Hero click={handleScroll} />
            <hr ref={ref} class="h-0"></hr>
            <Cards />
          </>
        )
      }
    } else {
      return (
        <>
          <Hero click={handleScroll} />
          <hr ref={ref} class="h-0"></hr>
          <Cards />
        </>
      )
      // }
    }
  } else {
    return (
      <>
        <Hero />
        <Message message={message} />
      </>
    )
  }
}

export default Landing
