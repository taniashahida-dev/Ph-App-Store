import React from "react";
import heroImg from "../../../assets/images/hero.png";
import playstoreImg from "../../../assets/images/playstore.png";
import appStoreImg from "../../../assets/images/appstore.png";

const Banner = () => {
  return (
    <div className=" bg-gray-50 space-y-6 ">
      <div className="text-center py-4 space-y-4">
        <h2 className="text-7xl font-semibold">
          We Build <br />
         <span className="text-purple-500 font-bold"> Productive</span> Apps
        </h2>
        <p className="text-gray-400">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <p className="flex items-center gap-1  bg-gray-100 border border-gray-200 rounded-lg p-2">
          <img className="h-4" src={playstoreImg} /> Google Play
        </p>
        <p className="flex items-center gap-1  bg-gray-100 border border-gray-200 rounded-lg p-2">
          <img className="h-4" src={appStoreImg} /> App Store
        </p>
      </div>
      <div className="flex justify-center">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
