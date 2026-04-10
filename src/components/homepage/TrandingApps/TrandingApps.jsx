import React, { useEffect, useState } from 'react';

const TrandingApps = () => {

const [apps,setApps] = useState()

    useEffect(()=>{
       const appData =async()=>{
       const res = await fetch('/data.json')
      const data = await res.json()
      setApps(data)
       }
       appData()
    } 
    ,[])
    console.log(apps)
    return (
        <div>
            
        </div>
    );
};

export default TrandingApps;