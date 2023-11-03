import axios from 'axios'
import React from 'react'

const Bronze = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('subscribe basic plan')
    console.log(e)
    const resp = await axios.post('http://localhost:5000/checkout', )
  }
  return (
    <div class="bg-cyan-300 rounded-xl">
      <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
        <img
          src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp"
          class="w-12"
        />
        <div class="mt-3 font-semibold text-lg">Bronze</div>
        <div class="text-sm font-light w-60 md:w-auto">Basic</div>
        <div class="my-4">
          <span class="font-bold text-base">$99</span>
          <span class="font-light text-sm">/month</span>
        </div>

        <form action='http://localhost:5000/checkout' method='POST'>
          {/* Add a hidden field with the lookup_key of your Price */}
          <input type="hidden" name="lookup_key" value="bronze" />
          <button
            id="checkout-and-portal-button"
            type="submit"
            className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4"
          >
            Add subscription
          </button>
        </form>
      </div>
    </div>
  )
}

export default Bronze
