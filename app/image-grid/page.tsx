import React from 'react'

const page = () => {
  return (
    // Global container
    <div className='min-h-screen flex flex-col'>
      <div id='div1' className='h-14 w-full bg-blue-500 text-white fixed z-10'>
        Navbar
      </div>
      <div
        id='div2'
        className='flex-1 flex flex-col relative items-center justify-center bg-yellow-400'
      >
        <div className='border border-green-500 px-4 py-2 rounded-md bg-pink-500'>
          click div
        </div>
        <button className='border border-green-500 px-4 py-2 rounded-md bg-pink-500'>
          click me
        </button>
      </div>
    </div>
  )
}

export default page
