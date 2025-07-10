import React from 'react'

const TasksNumbers = ({data}) => {
  return (
    <div className='sm:flex-nowrap flex flex-wrap justify-between gap-10 text-white'>
        <div className=' w-[45%] px-9 py-6 bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.newCount}</h2>
            <h3 className='text-xl font-medium'> New Tasks</h3>

        </div>
        <div className=' w-[45%] px-9 py-6 bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.activeCount}</h2>
            <h3 className='text-xl font-medium'> Active Tasks</h3>

        </div>
        <div className=' w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.failedCount}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>

        </div>
        <div className=' w-[45%] px-9 py-6 bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.completedCount}</h2>
            <h3 className='text-xl font-medium'> Completed Tasks</h3>

        </div>
      
    </div>
  )
}

export default TasksNumbers
