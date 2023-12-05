'use client'

import Collapsible from '../_components/collapsible'

const Dropdown = () => {
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
    </div>
  )
}

export default Dropdown
