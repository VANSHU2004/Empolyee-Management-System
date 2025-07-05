import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className=' flex items-center justify-start gap-5 h-[55%] w-full mt-10 py-5 overflow-x-scroll text-white' >
        <div className='shrink-0 h-full w-1/3 bg-red-400 rounded-xl px-6 py-4'>
            <div className='flex justify-between'>
                <h3 className='bg-red-700 inline-block px-2 py-1 rounded-2xl'>high</h3>
                <h4>5 July 2025</h4>
            </div>
        </div>
        
        
    </div>
  )
}

export default TaskList
