'use client'
import { useState } from 'react'
import Dialog from '../_components/Dialog'

import Collapsible from '../_components/collapsible'

const Dropdown = () => {
  const [radioChecked, setRadioChecked] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('selection: ', e.target.value)
  }

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='w-1/3 mt-20'>
        <select
          id='fruit'
          name='fruit'
          className='w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-400'
          onChange={handleSelection}
        >
          <option value=''>Select a Fruit</option>
          <option value='apple'>Apple</option>
          <option value='banana'>Banana</option>
          <option value='cherry'>Cherry</option>
          <option value='orange'>Orange</option>
          <option value='strawberry'>Strawberry</option>
        </select>
      </div>
      <div className='max-w-4xl mt-20'>
        <Collapsible
          title='Where did Loren Ipsum originate?'
          text='Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.'
          tab={1}
        />
        <Collapsible
          title='Why does a compassionate god cause so much suffereing?'
          text='Well..well..well. Why do you think god exists? Even if he exists, what made you think that he is compassionate? Human beings are inherently evil. God made humans in his own image. Compassion is the last of his traits.'
          tab={2}
        />
      </div>
      <div className='flex flex-start items-center space-x-4 mt-10'>
        <div className='flex flex-center hover:scale-150 transition-transform duration-200  cursor-pointer rounded-full border-2 border-gray-500'>
          <input
            readOnly
            className={`w-4 h-4 m-0.5 rounded-full focus:outline-none cursor-pointer ${
              radioChecked === 'radio1' ? 'bg-teal-500' : ''
            }`}
            onClick={() => {
              setRadioChecked('radio1')
            }}
          />
        </div>
        <p className='text-xl font-semibold '>Random Radio Button 1</p>
      </div>
      <div className='flex flex-start items-center space-x-4 mt-2'>
        <div className='flex flex-center hover:scale-150 transition-transform duration-200  cursor-pointer rounded-full border-2 border-gray-500'>
          <input
            readOnly
            className={`w-4 h-4 m-0.5 rounded-full focus:outline-none cursor-pointer ${
              radioChecked === 'radio2' ? 'bg-teal-500' : ''
            }`}
            onClick={() => {
              setRadioChecked('radio2')
            }}
          />
        </div>
        <p className='text-xl font-semibold '>Random Radio Button 2</p>
      </div>

      <button
        type='button'
        onClick={() => {
          setDialogOpen(true)
        }}
        className='px-4 py-1 border-2 border-gray-300 bg-gray-300 hover:bg-gray-700 text-black hover:text-white mt-10 rounded-md'
      >
        dialog
      </button>
      {dialogOpen && (
        <Dialog
          onClose={() => {
            setDialogOpen(false)
          }}
        >
          <h1 className='px-2 py-2 text-justify'>
            Welcome to the new dialog box
          </h1>
          <p className='px-2 py-2 text-justify'>
            The hare never inteneded to win the race nor it had any confidence.
            It probably wasnt even participating in the race but was on its way
            home. The hare probably was the only one who thought it was a race
            and took it seriously.
          </p>
        </Dialog>
      )}
    </div>
  )
}

export default Dropdown
