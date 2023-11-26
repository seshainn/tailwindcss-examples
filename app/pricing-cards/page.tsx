import React from 'react'
/* a global container is following by a outer and inner container. The inner container leaves a  margin of 3 resulting in the perimeter for the div. */
const page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center max-md:p-8 md:justify-center max-md:space-y-5 md:space-x-5 min-h-screen bg-slate-800'>
      <div className='bg-slate-700 rounded-xl'>
        <div className='my-3 mx-3 bg-slate-800 text-white text-center rounded-xl'>
          <div className='flex flex-col items-center justify-center mt-3 mx-3 p-8'>
            <h1 className='font-sans text-xl uppercase'>BASIC</h1>
            <h1 className='font-serif text-5xl uppercase mt-10'>100GB</h1>
            <h3 className='font-serif text-md pt-2 mt-2'>$1.99/month</h3>
            <div className='w-fit rounded-md my-5 px-10 py-3 border border-violet-600 hover:bg-violet-600 duration-500'>
              <a href='/'>Purchase</a>
            </div>
          </div>
          <div className='border border-t-0 border-slate-700'></div>
          <div className='flex flex-col items-center justify-center space-y-2 text-sm py-8'>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>100 GB storage</p>d
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Option to add members</p>
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Extra member benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-violet-600 rounded-xl'>
        <div className='my-3 mx-3 bg-slate-800 text-white text-center rounded-xl'>
          <div className='flex flex-col items-center justify-center mt-3 mx-3 p-8'>
            <h1 className='font-sans text-xl uppercase'>Standard</h1>
            <h1 className='font-serif text-5xl uppercase mt-10'>200GB</h1>
            <h3 className='font-serif text-md pt-2 mt-2'>$1.99/month</h3>
            <div className='w-fit rounded-md my-5 px-10 py-3 border border-violet-600 bg-violet-600'>
              <a href='/'>Purchase</a>
            </div>
          </div>
          <div className='border border-t-0 border-slate-700'></div>
          <div className='flex flex-col items-center justify-center space-y-2 text-sm py-8'>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>200 GB storage</p>d
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Option to add members</p>
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Extra member benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-slate-700 rounded-xl'>
        <div className='my-3 mx-3 bg-slate-800 text-white text-center rounded-xl'>
          <div className='flex flex-col items-center justify-center mt-3 mx-3 p-8'>
            <h1 className='font-sans text-xl uppercase'>Premium</h1>
            <h1 className='font-serif text-5xl uppercase mt-10'>1TB</h1>
            <h3 className='font-serif text-md pt-2 mt-2'>$1.99/month</h3>
            <div className='w-fit rounded-md my-5 px-10 py-3 border border-violet-600 hover:bg-violet-600 duration-500'>
              <a href='/'>Purchase</a>
            </div>
          </div>
          <div className='border border-t-0 border-slate-700'></div>
          <div className='flex flex-col items-center justify-center space-y-2 text-sm py-8'>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>1 TB storage</p>d
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Option to add members</p>
            </div>
            <div className='flex justify-center'>
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
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              <p className='pl-5'>Extra member benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
