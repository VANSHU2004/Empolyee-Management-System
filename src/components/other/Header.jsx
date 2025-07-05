import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <div className='flex items-end justify-between text-white mb-10'>
      <h1 className='text-xl font-medium'>Hello, <br /><span className='text-4xl font-semibold'>Atul Sharma 😍</span></h1>
      <button onClick={<Link to="/login" />} className='bg-red-500 text-l px-5 py-2 rounded-full hover:bg-red-600'>Log out</button>
    </div>
  )
}

export default Header
