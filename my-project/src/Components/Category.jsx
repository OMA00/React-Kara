import React from "react";

const Category = () => {
  return (
    <div className=" bg-NewColor h-[746px]py-[20px]max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold font-mont text-4xl text-white py-5">
            Jobs by Category
          </h1>
          <p className="font-normal font-mont text-lg text-white">
            With lots of unique blocks you can easily build a page without
            coding
          </p>
        </div>
        <span className="font-mont font-bold text-sm text-babyGreen">
          Explore all categories
        </span>
      </div>

      <div className="flex gap-5">
        <div className="rounded-md w-[350px] h-[117px] bg-babyBlue px-4 py-4">
          <h3 className="font-mont font-bold text-lg text-white">Design</h3>
          <p className="font-normal font-mont text-sm text-white">47 Jobs</p>
        </div>
        <div className="rounded-md w-[350px] h-[117px] bg-white px-4 py-4">
          <h3 className="font-mont font-bold text-lg text-NewColor ">
            Marketing
          </h3>
          <p className="font-mont font-bold text-lg text-NewColor">51 Jobs</p>
        </div>
        <div className="rounded-md w-[350px] h-[117px] bg-white px-4 py-4">
          <h1 className="font-mont font-bold text-lg text-NewColor">
            Engineering Jobs
          </h1>
          <p className="font-mont font-bold text-lg text-NewColor">99 Jobs</p>
        </div>
      </div>

      <div className="flex gap-5 py-10">
        <div className="rounded-md w-[350px] h-[117px] bg-white px-4 py-4">
          <h3 className="font-mont font-bold text-lg text-NewColor">
            Management
          </h3>
          <p className="font-mont font-bold text-lg text-NewColor">16 Jobs</p>
        </div>
        <div className="rounded-md w-[350px] h-[117px] bg-white px-4 py-4">
          <h3 className="font-mont font-bold text-lg text-NewColor">Finance</h3>
          <p className="font-mont font-bold text-lg text-NewColor">23 Jobs</p>
        </div>
        <div className="rounded-md w-[350px] h-[117px] bg-white px-4 py-4">
          <h3 className="font-mont font-bold text-lg text-NewColor">
            Customer Support
          </h3>
          <p className="font-mont font-bold text-lg text-NewColor">34 Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
