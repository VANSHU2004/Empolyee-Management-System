import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = () => {
    

    
  return (
    <div className='p-10 bg-black text-white'>
        <Header />
        <CreateTask />
        <AllTasks/>
                  
    </div>
  )
}

export default AdminDashboard
