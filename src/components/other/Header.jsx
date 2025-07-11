import React from 'react'

const Header = ({data}) => {
  // console.log(data)  
  return (
    <div className='flex items-end justify-between text-white mb-10'>
      <h1 className='text-xl font-medium'>Hello, <br /><span className='text-4xl font-semibold'>{data.name} 😍</span></h1>
      <button type='button' className='bg-red-500 text-sm px-5 py-2 rounded-full hover:bg-red-600 cursor-pointer'>Log out</button>
    </div>
  )
}

export default Header
