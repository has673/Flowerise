import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <div className='w-100 h-240 z-10 bg-zinc-200 rounded-md '>
    <h3 className='text-text1 text-3xl text-center mt-8'>Unleash your inner productivity</h3>
    <p className='text-text text-xs  text-center mt-5'>Sync your tasks and wellness to your unique rhythm.</p>
    <div className='flex justify-center my-10'>
    <Button/>
    </div>
      
    </div>
  )
}

export default Card
