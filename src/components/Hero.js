import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] -mt-[96px] w-full h-screen mx-auto text-center justify-center flex flex-col">
        <h1 className="font-bold md:text-6xl sm:text-3xl md:p-4">
          Here story begins...
        </h1>
        <div>
          <p className="md:text-2xl sm:text-xl font-bold">
            Fast, flexible management for{' '}
          </p>
          <Typed
            className="font-bold md:text-2xl sm:text-xl text-cyan-300"
            strings={['Saas']}
            typeSpeed={120}
            backDelay={120}
            loop
          />
        </div>
        <p>Subscribe for your own management platform...</p>
        <button className="mt-6 mx-auto transition font-bold text-lg w-32 h-8 rounded-md ease-in-out delay-150 bg-cyan-300 hover:-translate-y-1 hover:scale-110  duration-300 ...">
          Get Start!
        </button>
      </div>
    </div>
  )
}

export default Hero
