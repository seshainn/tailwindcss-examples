'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Finalproj = () => {
  const [toggleHam, setToggleHam] = useState(false)
  return (
    <div className='flex flex-col min-h-screen bg-white overflow-x-hidden'>
      <nav>
        <div className='flex flex-row justify-between py-10 px-20'>
          <div className='flex flex-row justify-between space-x-1'>
            <Image
              src='/assets/finalproj/logo-bookmark.svg'
              alt='bookmark'
              width={144}
              height={24}
              objectFit='contain'
            />
          </div>
          <div className='flex flex-row text-md text-gray-800 tracking-wider space-x-8 uppercase max-md:hidden'>
            <Link href='#features' className='py-2 hover:text-gray-300'>
              features
            </Link>
            <Link href='#' className='py-2 hover:text-gray-300'>
              Download
            </Link>
            <Link href='#faq' className='py-2 hover:text-gray-300'>
              faq
            </Link>
            <button
              type='button'
              className='border-2 bg-softRed hover:bg-white border-softRed px-5 rounded-lg uppercase text-sm py-2 tracking-wider'
            >
              Login
            </button>
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
              <span className='hamburger-top bg-black'></span>
              <span className='hamburger-middle bg-black translate-y-[7px]'></span>
              <span className='hamburger-bottom bg-black translate-y-[14px]'></span>
            </button>
          </div>
        </div>
        {toggleHam && (
          <div className='fixed left-0 top-0 bottom-0 flex flex-col w-full min-h-screen self-end py-40 pl-12 space-y-5 text-lg text-white font-alata uppercase bg-black opacity-70 md:hidden z-20'>
            <Link href='#features' className='hover:text-gray-500'>
              features
            </Link>
            <Link href='#' className='hover:text-gray-500'>
              download
            </Link>
            <Link href='#faq' className='hover:text-gray-500'>
              faq
            </Link>
            <Link href='#' className='hover:text-gray-500'>
              login
            </Link>
          </div>
        )}
      </nav>
      <div className='container flex flex-col-reverse lg:flex-row mx-auto p-6 lg:mb-0'>
        <div className='flex flex-col lg:mt-16 lg:w-1/2 space-y-10'>
          <h1 className='font-semibold font-sans text-3xl text-black text-center lg:text-6xl lg:text-left'>
            A Simple Bookmark Manager
          </h1>
          <p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className='flex space-x-4 items-center justify-center w-full lg:justify-start'>
            <Link
              href='#'
              className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue'
            >
              Get it on chrome
            </Link>
            <Link
              href='#'
              className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue'
            >
              Get it on Firefox
            </Link>
          </div>
        </div>
        <div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
          <div className='bgHero'></div>
          <div className='relative lg:top-24 xl:top-0'>
            <Image
              src='/assets/finalproj/illustration-hero.svg'
              alt='illustration'
              width={500}
              height={800}
            />
          </div>
        </div>
      </div>
      <section id='features'>
        <div className='container mx-auto mt-16 px-6'>
          <h2 className='mb-6 text-4xl font-semibold text-center'>Features</h2>
          <p className='max-w-md mx-auto text-center text-grayishBlue'>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      <section id='tabs'>
        <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
          {/*<div className='bgTabs'></div>*/}

          <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
            <div
              className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
              data-target='panel-1'
            >
              <div
                className='py-5 border-b-4 border-softRed'
                data-target='panel-1'
              >
                Simple Bookmarking
              </div>
            </div>

            <div
              className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
              data-target='panel-2'
            >
              <div className='py-5' data-target='panel-2'>
                Speedy Searching
              </div>
            </div>

            <div
              className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
              data-target='panel-3'
            >
              <div className='py-5' data-target='panel-3'>
                Easy Sharing
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='faq'>
        <div className='container mx-auto'>
          <h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
            Here are some of our FAQs. If you have any other questions youd like
            answered please feel free to email us.
          </p>
        </div>
      </section>

      <section id='faq-accordion'>
        <div className='container mx-auto px-6 mb-32'>
          <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
            <div className='py-1 border-b outline-none group' tabIndex={1}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  What is Bookmark?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      stroke-width='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-900'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={2}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  How can I request a new browser?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      stroke-width='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={3}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  Is ther a mobile app?
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      stroke-width='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            <div className='py-1 border-b outline-none group' tabIndex={4}>
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                <div className='transition duration-500 ease group-hover:text-red-500'>
                  What about other Chromium browsers
                </div>

                <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='12'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      stroke-width='3'
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>

              {/* -- Tab Inner Content -- */}
              <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Finalproj
