import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/404.png"; // তোমার image path ঠিক করো

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center max-w-md">
        
        {/* Image */}
        <img
          src={errorImg}
          alt="404 Error"
          className="w-full mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops, page not found!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          The page you are looking for is not available.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Go Back!
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;