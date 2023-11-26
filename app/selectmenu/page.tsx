import React from 'react'

const Dropdown = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-1/3'>
        <select
          id='fruit'
          name='fruit'
          className='w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-400'
        >
          <option value='' selected>
            Select a Fruit
          </option>
          <option value='apple'>Apple</option>
          <option value='banana'>Banana</option>
          <option value='cherry'>Cherry</option>
          <option value='orange'>Orange</option>
          <option value='strawberry'>Strawberry</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdown
