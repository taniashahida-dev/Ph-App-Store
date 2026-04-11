import React from 'react';
import useApps from '../../hooks/useApps';
import { ClimbingBoxLoader } from 'react-spinners';
import AppsCard from '../homepage/TrandingApps/AppsCard';


const AllApps = () => {

    const {apps ,loading}= useApps()
    return (
        <div className=" py-20 bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
        <p className="text-gray-500">
         Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

<div className='flex justify-between w-9/12 mx-auto items-center mt-16'>
    <div className='text-lg font-semibold'>
        ({apps.length}) Apps Found
    </div>
   <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
</div>

      {
        loading ? <div className="flex justify-center items-center"><ClimbingBoxLoader color="#4A0E4E"/></div> :  <>
        <div className="grid grid-cols-4 gap-8 p-4 mb-10 w-10/12 mx-auto ">{
        apps.map((app,i)=> <AppsCard app={app} key={i}/>)
        }</div>
</>
     
      }

       
    </div>
    );
};

export default AllApps;