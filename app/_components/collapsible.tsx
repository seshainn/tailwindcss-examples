import { useState } from 'react'

type propsType = {
  title: string
  text: string
  tab: number
}

const Collapsible = (props: propsType) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className='flex flex-col items-center px-4 text-lg text-zinc-600 group'>
      <div
        className='flex justify-between py-3 w-full cursor-pointer border-b border-zinc-200 outline-none' //outline-none prevents outline when using tab
        tabIndex={props.tab} //allows use of onFocus and onBlue on div
        onFocus={() => {
          setIsCollapsed(false)
        }}
        onBlur={() => {
          setIsCollapsed(true)
        }}
      >
        <h1>{props.title}</h1>
        <div
          className={`transition duration-500 ease ${
            !isCollapsed && '-rotate-180 text-orange-500'
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='m6 9 6 6 6-6' />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden ${
          isCollapsed ? 'max-h-0' : 'max-h-screen'
        }`} //overflow-hidden helps to hide content when max-h-0
      >
        <p className='py-3 text-justify'>{props.text}</p>
      </div>
    </div>
  )
}

export default Collapsible
