import React from "react";

const DetailsComponents = ({ title, details, btnText }) => {
  return (
    <div className="w1/2">
      <h1 className="font-bold leading-10 capitalize text-[48px]">{title}</h1>
      <p className="text-19px leading-8 font-light">{details}</p>
      <button className="w-[200px] h-[32px]  bg-purple-600 text-black rounded-md">
        {btnText}
      </button>
    </div>
  );
};

export default DetailsComponents;
