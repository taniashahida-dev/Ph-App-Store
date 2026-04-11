
import { createContext, useState } from 'react';
export const AppProvider = createContext()
// console.log(AppProvider)
const AppContext = ({children}) => {
const [installApps,setInstallApps] = useState([])

    const data ={
        installApps , setInstallApps
    }
    
    return (
    <AppProvider.Provider value ={data}>{children}</AppProvider.Provider>
)
};

export default AppContext;