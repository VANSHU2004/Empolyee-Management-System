import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import React from 'react'
import AuthProvider from './context/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(

       
        <React.StrictMode>
                
                <AuthProvider>
                        <App />        
                </AuthProvider>            
                       
        </React.StrictMode>   
        
    
  
    
  
)
