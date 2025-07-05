import React from 'react'
import Header from '../other/Header'
import TasksNumbers from '../other/TasksNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
    
    
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TasksNumbers />
        <TaskList />

    </div>
  )
}

export default EmployeeDashboard
