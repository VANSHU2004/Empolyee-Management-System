import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import { StrictMode } from 'react'
import React from 'react'
import TaskContext from './context/TaskContext.jsx'


createRoot(document.getElementById('root')).render(
        
        <React.StrictMode>

                <AuthContext>
                        <TaskContext>
                                <App />
                        </TaskContext>
                </AuthContext>
        
        </React.StrictMode>   
        
    
  
    
  
)
