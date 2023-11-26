import React from 'react'

const page = () => {
  return (
    // Global container
    <div className='flex items-center justify-center bg-slate-100 min-h-screen'>
      {/* main container */}
      <div className='flex flex-col items-center justify-center space-y-5 bg-white rounded-xl p-10'>
        {/* Menu Items */}
        <div className='flex flex-row justify-end space-x-5'>
          <div className='flex flex-col group text-xs tracking-tighter'>
            <a href='#'>Vector</a>
            <div className='border-b-2 border-black opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='flex flex-col group text-xs tracking-tighter'>
            <a href='#'>Illustrations</a>
            <div className='border-b-2 border-black opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='flex flex-col group text-xs tracking-tighter'>
            <a href='#'>Images</a>
            <div className='border-b-2 border-black opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='flex flex-col group text-xs tracking-tighter'>
            <a href='#'>Icons</a>
            <div className='border-b-2 border-black opacity-0 group-hover:opacity-100'></div>
          </div>
        </div>
        {/* Search Box */}
        <div>Search Box</div>
        {/* Upload button */}
        <div>Upload Button</div>
        {/* Images grid */}
        <div>Images Grid</div>
      </div>
    </div>
  )
}

export default page
