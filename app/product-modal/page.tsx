import Image from 'next/image'
import React from 'react'
/* a global container is following by a outer and inner container. The inner container leaves a  margin of 3 resulting in the perimeter for the div. */
const page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center max-md:p-8 md:justify-center max-md:space-y-5 md:space-x-5 min-h-screen bg-slate-100'>
      <div className='flex justify-center bg-white border border-slate-200 rounded-lg shadow-2xl'>
        <div className='flex flex-col md:flex-row m-10 md:space-x-8 max-md:space-y-5'>
          <div className='flex justify-center'>
            <div>
              <Image
                src='/assets/headphone.PNG'
                alt='headphone'
                width={240}
                height={240}
                className='hover:scale-105 duration-500'
              />
            </div>
          </div>
          <div className='flex flex-col space-y-2 tracking-tighter'>
            <div className='inline-block w-fit text-white text-sm px-2 bg-black rounded-full'>
              Free Shipping
            </div>
            <p>Razer Kraken Kitty Edt Gaming Headset Quartz</p>
            <div className='flex flex-col pt-8'>
              <p className='text-xs line-through'>$799</p>
              <p className='text-2xl font-bold pt-3'>$599</p>
              <p className='text-xs text-slate-500'>
                The offer is valid until Nov 24 or as long as stock lasts!
              </p>
            </div>
            <div className='bg-blue-500 border py-3 text-center text-white text-sm rounded-md hover:bg-blue-700'>
              <button type='submit'>Add to cart</button>
            </div>
            <div className='flex flex-row space-x-1 py-2 group'>
              <div className='w-3 h-3 rounded-full bg-green-400 group-hover:animate-ping'></div>
              <p className='text-xs tracking-tighter'>50+ pcs. in stock</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center md:space-x-10 max-md:space-y-5'>
              <div className='flex flex-row border border-slate-400 py-2 px-4 rounded-md space-x-2 max-md:w-full justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
                <button type='submit'>
                  <p className='text-sm tracking-tighter'>Add to cart</p>
                </button>
              </div>
              <div className='flex flex-row border border-slate-400 py-2 px-4 rounded-md space-x-2 max-md:w-full justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
                <button type='submit'>
                  <p className='text-sm tracking-tighter'>Add to wishlist</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
