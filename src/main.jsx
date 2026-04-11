import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Router'
import AppContext from './appContext/AppContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext><RouterProvider router={router}/></AppContext>
 
  </StrictMode>,
)
