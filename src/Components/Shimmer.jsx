import React from "react";

const Shimmer = () => {
  return (
    <div className="m-5 p-2">
      <p className="text-center font-bold text-xl">
        Loading... <br />
        <span className="loading loading-spinner loading-md"></span>
        <br />
        or Please refresh the page
      </p>
      <div className="flex flex-wrap justify-center items-center my-12 mx-8 p-12">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
