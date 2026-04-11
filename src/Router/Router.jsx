import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../components/homepage/Home/Home";
import AllApps from "../components/AllApps/AllApps";
import InstalledApps from "../components/InstalledApps/InstalledApps";
import Dasgboard from "../components/Dashboard/Dasgboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AppsDetails from "../components/homepage/TrandingApps/AppsDetails";

 export const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children : [
      {
        index : true,
        path: '/',
        element : <Home></Home>      },
        {
          path:'/apps',
          element: <AllApps></AllApps>
        },
        {
            path: '/apps/:id',
            element: <AppsDetails/>
        },
       { path: '/installedApps',
        element: <InstalledApps></InstalledApps>
       },
       {
        path: '/dashboard',
        element: <Dasgboard></Dasgboard>
       }
     
    ]
    ,
    errorElement: <ErrorPage/>
  },
 
])