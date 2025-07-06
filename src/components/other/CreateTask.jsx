import React from 'react'

const CreateTask = () => {
  return (
    
        <div className='p-5 mt-7 rounded bg-[#1C1C1C] h-81.5'>
            <form className='flex flex-wrap items-start justify-between w-full'>

                <div className='w-1/2'>
                    <div>
                        <h3 className='h3'>Task Title</h3>
                        <input className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4' placeholder='Make a UI Design' type="text" />
                    </div>

                    <div>
                        <h3 className='h3'>Date</h3>
                        <input className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4' type="date" />
                    </div>
                
                    <div>
                        <h3 className='h3'>Assign To</h3>
                        <input className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className='h3'>Category</h3>
                        <input className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4' type="text" placeholder='Design, dev etc' />
                    </div>

                </div>
                
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='h3'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 border rounded outline-none bg-transparent border-gray-400 mb-4 '
                    name="" id=""></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-1 rounded-2xl text-sm w-full mt-4 cursor-pointer'>Create Task</button>
                </div>        

                

            </form>
        </div>


    
  )

    
}

export default CreateTask
