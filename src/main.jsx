import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Home from './components/homepage/Home/Home'
import InstalledApps from './components/InstalledApps/InstalledApps'
import Dasgboard from './components/Dashboard/Dasgboard'
import AllApps from './components/AllApps/AllApps'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children : [
      {
        index : true,
        path: '/home',
        element : <Home></Home>      },
        {
          path:'/apps',
          element: <AllApps></AllApps>
        },
       { path: '/installedApps',
        element: <InstalledApps></InstalledApps>
       },
       {
        path: '/dashboard',
        element: <Dasgboard></Dasgboard>
       }
     
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
