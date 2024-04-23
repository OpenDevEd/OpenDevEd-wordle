import React from 'react'
import DarkModeButton from './DarkModeButton';

const Title = () => {
  return (
    <header className='w-full  border-b border-gray-400 py-3'>
        <h1 className='text-4xl text-center font-bold'>
          OpenDevEd-Wordle
        </h1>
        <DarkModeButton />
    </header>
  )
}

export default Title;