import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './provider/AuthProvider';
import router from './routes/Routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        
      </AuthProvider>
  
   
  </React.StrictMode>,
  </div>
)
