import axios from 'axios'
import React from 'react'

const CurrentUserDisplay = ({ currentSubscription }) => {
  const {
    email,
    id,
    start_date,
    end_date,
    status,
    lookup_key,
    cancel_at_period_end,
  } = currentSubscription
  const pausePlan = async () => {
    const resp = await axios.post(
      process.env.REACT_APP_SERVER_ADDRESS + '/pauseplan',
      { id }
    )
    console.log(resp)
  }
  const resumePlan = async () => {
    const resp = await axios.post(
      process.env.REACT_APP_SERVER_ADDRESS + '/resumeplan',
      { id }
    )
    console.log(resp)
  }

  return (
    <div class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="px-5 pb-5 ">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
          Your current plan id: {id}
        </h5>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
          Email: {email}
        </h5>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
          Start Date: {new Date(Date.parse(start_date)).toDateString()}
        </h5>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
          End Date: {new Date(Date.parse(end_date)).toDateString()}
        </h5>

        <div class="flex items-center justify-between mt-3">
          <span
            class={
              status === 'active'
                ? 'bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'
                : 'bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'
            }
          >
            {status}
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {lookup_key}
          </span>
          {!cancel_at_period_end ? (
            <button
              onClick={() => pausePlan()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              pause the plan
            </button>
          ) : (
            <button
              onClick={() => resumePlan()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              resume the plan
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrentUserDisplay
