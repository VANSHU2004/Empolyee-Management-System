import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   // getLocalStorage()
  // }, [])
  const [user, setUser] = useState(null)

  const [loggedInUserData, setloggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  // useEffect(() => {
  //   if(Authdata){
  //     const loggedInUser = localStorage.getItem("loggenInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [Authdata])
  

  

  const handleLogin = (email, password) => {

    if(email == 'atul.admin@techcorp.com' && password == 'admin123'){
      setUser('admin')
      localStorage.setItem("loggedInUser" , JSON.stringify({role: "admin"}))
      
    }else if(Authdata){
      const employee = Authdata.employees.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser" , JSON.stringify({role: "employee"}))
      }
           
    } 
    else{
      alert("Invalid Credentials")
    } 
  }

  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == "admin" ? <AdminDashboard/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} />: null) }
    </>
  )
}

export default App
