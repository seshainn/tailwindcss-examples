import React from 'react'

const page = () => {
  return (
    // Global container
    <div className='flex items-center justify-center bg-slate-100 min-h-screen'>
      <button className='border-2 border-blue-800 bg-blue-800 text-gray-200 rounded-md tracking-tight flex-center space-x-1 hover:bg-gray-800 hover:border-gray-800 px-2 py-1 text-md font-semibold'>
        Open Dialog
      </button>
    </div>
  )
}

export default page
