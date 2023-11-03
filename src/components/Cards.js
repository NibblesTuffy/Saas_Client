import React from 'react'
import { cards } from '../utils/constants'
import Bronze from './Bronze'

const Cards = () => {
  return (
    <div class="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen ">
      <div class="bg-cyan-100 p-10 rounded-xl  ">
        <div class="flex flex-col justify-center items-center text-center">
          <div class="max-w-sm font-bold font-sans">
            Get the most out of your store with the right subscription
          </div>
          <div class="font-light max-w-lg mt-5 text-sm">
            All subscription can be used within 24 hours
          </div>
        </div>

        <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10 ">
          {/* {cards.map((card) => {
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

                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:scale-110">
                    subscribe
                  </button>
                </div>
              </div>
            )
          })} */}
          
          <Bronze />
          <div class="bg-cyan-300 rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img
                src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp"
                class="w-12"
              />
              <div class="mt-3 font-semibold text-lg">Silver</div>
              <div class="text-sm font-light w-60 md:w-auto">Starter</div>
              <div class="my-4">
                <span class="font-bold text-base">$199</span>
                <span class="font-light text-sm">/month</span>
              </div>

              <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                Add subscription
              </button>
            </div>
          </div>

          <div class="bg-cyan-300 rounded-xl">
            <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png"
                class="w-12"
              />
              <div class="mt-3 font-semibold text-lg">Gold</div>
              <div class="text-sm font-light w-60 md:w-auto">Pro</div>
              <div class="my-4">
                <span class="font-bold text-base">$399</span>
                <span class="font-light text-sm">/month</span>
              </div>

              <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                Add subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
