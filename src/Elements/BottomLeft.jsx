import React from "react";

const BottomLeft = () => {
  return (
    <div className="bg-cyan text-white">
      <h1 className="text-lg mb-3">Monthly Subscription</h1>
      <p className="flex items-center mb-1">
        <span className="text-4xl mr-3 font-bold">$29</span>{" "}
        <span className="opacity-50">per month</span>
      </p>
      <p className="opacity-80 mb-5 mobile:text-sm :">
        Full access for less than $1 a day
      </p>
      <button className="w-full bg-bright-yellow rounded-lg py-[10px] shadow-lg">
        Sign Up
      </button>
    </div>
  );
};

export default BottomLeft;
