import React from 'react'
import Header from '../other/Header'
import TasksNumbers from '../other/TasksNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log(data) 
    
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
        <Header data ={data} />
        <TasksNumbers data={data} />
        <TaskList data ={data} />

    </div>
  )
}

export default EmployeeDashboard
