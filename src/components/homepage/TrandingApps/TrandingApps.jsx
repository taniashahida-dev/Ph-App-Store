
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";
import useApps from "../../../hooks/useApps";

const TrandingApps = () => {
  const {apps,loading} = useApps()
  // console.log(loading ,"loading")
//   console.log(apps);
  return (
    <div className=" py-20 bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {
        loading ? <div className="flex justify-center items-center"><ClimbingBoxLoader color="#4A0E4E"/></div> :  <>
        <div className="grid grid-cols-4 gap-8 p-4 my-10 w-10/12 mx-auto ">{
        apps.slice(0,8).map((app,i)=> <AppsCard app={app} key={i}/>)
        }</div>
        <div className="text-center">
         <Link to={'/apps'}> <button className="btn btn-primary ">Show All</button></Link>
      </div> ;
</>
     
      }

       
    </div>
  );
};

export default TrandingApps;
