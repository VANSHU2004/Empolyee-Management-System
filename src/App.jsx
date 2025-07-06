import React, { useEffect, useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {

    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log(user)
    }else if(email=="user@me.com" && password == "123"){
      setUser('employee')
      console.log(user)
    } 
    else{
      alert("Invalid Credentials")
    } 
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}

    </>
  )
}

export default App
