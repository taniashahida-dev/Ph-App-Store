import React, { useContext } from 'react';
import { AppProvider } from '../../appContext/AppContext';
import InstallAppsCard from './InstallAppsCard';

const InstalledApps = () => {
    const {installApps,setInstallApps} = useContext(AppProvider)

    const handleUninstall =(app)=>{
       const restApps = installApps.filter(item => item.id != app.id)
       setInstallApps(restApps)
    }
    console.log(installApps,setInstallApps)
    return (
       <div className=' bg-gray-50 py-10'>
         <div className='text-center py-10 w-10/12 mx-auto'>
               <div><h1 className='text-6xl font-bold'>Your Installed Apps</h1>
           <p className='text-gray-400 my-5'>Explore All Trending Apps on the Market developed by us</p></div>
             <div>
            <p className='text-xl font-semibold text-start'>{installApps.length} Apps Found</p>
           </div>
         </div>
        { installApps.length === 0 ? <h1 className='text-5xl font-bold text-center my-20 text-red-500 border border-red-100 p-10 rounded-2xl'> No Install Apps Founded</h1>:
            installApps.map(app=> <InstallAppsCard key={app.id} handleUninstall={handleUninstall} app={app}></InstallAppsCard>)
        }
       </div>
    );
};

export default InstalledApps;