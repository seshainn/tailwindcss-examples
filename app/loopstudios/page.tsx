'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Loopstudios = () => {
  const [toggleHam, setToggleHam] = useState(false)
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div id='topnav' className='w-full p-8'>
        <div className='flex justify-between'>
          <div>
            <h1 className='font-alata text-3xl font-semibold text-white'>
              loopstudios
            </h1>
          </div>
          <div className='md:hidden'>
            {/* hamburger menu on screens below md */}
            <button
              type='button'
              className='w-[24px] h-[24px] relative z-40'
              onClick={(e) => {
                e.currentTarget.classList.toggle('open-ham')
                setToggleHam(!toggleHam)
              }}
            >
              <span className='hamburger-top bg-white'></span>
              <span className='hamburger-middle bg-white translate-y-[7px]'></span>
              <span className='hamburger-bottom bg-white translate-y-[14px]'></span>
            </button>
          </div>
          <div className='flex space-x-5 max-md:hidden'>
            <a
              href='#'
              className='font-alata text-sm tracking-tighter font-bold text-white hover:text-pink-300'
            >
              About
            </a>
            <a
              href='#'
              className='font-alata text-sm tracking-tighter font-bold text-white hover:text-pink-300'
            >
              Careers
            </a>
            <a
              href='#'
              className='font-alata text-sm tracking-tighter font-bold text-white hover:text-pink-300'
            >
              Events
            </a>
            <a
              href='#'
              className='font-alata text-sm tracking-tighter font-bold text-white hover:text-pink-300'
            >
              Products
            </a>
            <a
              href='#'
              className='font-alata text-sm tracking-tighter font-bold text-white hover:text-pink-300'
            >
              Support
            </a>
          </div>
        </div>
        {toggleHam && (
          <div className='absolute left-0 top-0 bottom-0 flex flex-col w-full min-h-screen overflow-hidden self-end py-40 pl-12 space-y-5 text-lg text-white font-alata uppercase bg-black'>
            <a href='#' className='hover:text-pink-300'>
              About
            </a>
            <a href='#' className='hover:text-pink-300'>
              Careers
            </a>
            <a href='#' className='hover:text-pink-300'>
              Events
            </a>
            <a href='#' className='hover:text-pink-300'>
              products
            </a>
            <a href='#' className='hover:text-pink-300'>
              Support
            </a>
          </div>
        )}
        <div className='flex justify-start uppercase border-2 my-24 text-white font-josefin p-4 text-4xl font-light max-w-lg md:p-6 md:text-6xl'>
          impressive experiences that deliver
        </div>
      </div>
      <div className='relative flex flex-col max-w-6xl my-32 md:flex-row md:px-0'>
        <div className='flex flex-start md:p-10 w-fit'>
          <Image
            src='/assets/loopstudios/desktop/image-interactive.jpg'
            alt='interactive'
            height={800}
            width={600}
          />
        </div>
        <div className='top-48 pr-0 bg-white md:absolute md:right-0 md:py-10 md:pl-20'>
          <h2 className='max-w-lg mt-10 mb-6 font-sans text-center text-gray-900 md:text-5xl md:mt-0 md:text-left uppercase text-4xl'>
            The Leader in Interactive VR
          </h2>
          <p className='max-w-md text-center font-sans md:text-left'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className='flex flex-col mb-32'>
        <h1 className='uppercase text-5xl font-josefin text-center pb-10'>
          Our Creations
        </h1>
        <div className='flex flex-row space-x-1'>
          <div className='relative group w-1/4'>
            <Image
              src='/assets/loopstudios/desktop/image-deep-earth.jpg'
              alt='deep earth'
              width={500}
              height={300}
              className='group-scale rounded-md'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 image-gradient group-scale rounded-md'></div>
            <h5 className='bottom-4 text-2xl font-inter absolute text-gray-300 left-5 group-scale'>
              Deep Earth
            </h5>
          </div>
          <div className='relative group w-1/4'>
            <Image
              src='/assets/loopstudios/desktop/image-curiosity.jpg'
              alt='deep earth'
              width={500}
              height={300}
              className='group-scale rounded-md'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 image-gradient group-scale rounded-md'></div>
            <h5 className='bottom-4 text-2xl font-inter absolute text-gray-300 left-5 group-scale'>
              Curiosity
            </h5>
          </div>
          <div className='relative group w-1/4'>
            <Image
              src='/assets/loopstudios/desktop/image-fisheye.jpg'
              alt='deep earth'
              width={500}
              height={300}
              className='group-scale rounded-md'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 image-gradient group-scale rounded-md'></div>
            <h5 className='bottom-4 text-2xl font-inter absolute text-gray-300 left-5 group-scale'>
              Fish Eye
            </h5>
          </div>
          <div className='relative group w-1/4'>
            <Image
              src='/assets/loopstudios/desktop/image-from-above.jpg'
              alt='deep earth'
              width={500}
              height={300}
              className='group-scale rounded-md'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 image-gradient group-scale rounded-md'></div>
            <h5 className='bottom-4 text-2xl font-inter absolute text-gray-300 left-5 group-scale'>
              From Above
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loopstudios
