import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row items-center bg-slate-800 min-h-screen justify-center'>
        <Link href='pricing-cards'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            pricing-cards
          </button>
        </Link>
        <Link href='product-modal'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            product-modal
          </button>
        </Link>
        <Link href='image-grid'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            image grid
          </button>
        </Link>
        <Link href='loopstudios'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            loopstudios
          </button>
        </Link>
        <Link href='finalproj'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            finalproj
          </button>
        </Link>
        <Link href='selectmenu'>
          <button className='text-white border border-violet-600 rounded-full px-5 py-2 hover:bg-violet-600'>
            selectmenu
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
