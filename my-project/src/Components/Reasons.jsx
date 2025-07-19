import React from "react";

const Reasons = () => {
  return (
    <div className="flex gap-8 px-[264px]">
      <div>
        <img src="manstanding.svg" alt="" />
      </div>
      <div className="w-[470px] h-[344px]">
        <h1 className="font-bold font-mont text-3xl">
          Reasons you should choose us to grow today
        </h1>
        <p className="font-mont text-sm py-[10px]">
          Common trends for improving your rental income and making sure you
          stay in high demand
        </p>
        <div className="flex gap-8 py-[10px]">
          <h5 className="font-bold text-xs">Fully responsive</h5>
          <h5 className="font-bold text-xs">Beautiful Layout</h5>
        </div>
        <div className="flex gap-8">
          <h5 className="font-bold text-xs">Easy to edit</h5>
          <h5 className="font-bold text-xs">Google font included</h5>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
