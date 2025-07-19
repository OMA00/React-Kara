import React from "react";

const News = () => {
  return (
    <div className="bg-brainyCream">
      <h3 className="font-bold font-mont text-4xl py-5 text-center">
        News that helps
      </h3>
      <p className="font-normal font-mont text-sm text-center">
        With lots of unique blocks you can easily build a pagewithout coding.
      </p>

      <div className="flex item-center justify-center gap-5">
        <div>
          <img classname="rounded-md" src="Newsjb.svg" alt="News Images" />
          <div className="bg-white px-[32px] py-5">
            <h5 className="font-mont font-normal text-sm w-[287px] p-3">
              Career
            </h5>
            <p className="font-mont font-bold text-lg w-[287px]">
              How to win any job you want.Get Started in this 5 steps
            </p>
          </div>
        </div>
        <div className="rounded-md">
          <img className="rounded-md" src="Newsjb2.svg" alt="News Images" />
          <div className="bg-white px-[32px] py-5">
            <h5 className="font-mont font-normal text-sm w-[287px] p-3">
              Lifestyle
            </h5>
            <p className="font-mont font-bold text-lg w-[287px]">
              10 ways to ease your office work depression
            </p>
          </div>
        </div>
        <div>
          <img className="rounded-md" src="Newsjb3.svg" alt="News Images" />
          <div className="bg-white rounded-md px-[32px] py-5">
            <h5 className="font-mont font-normal text-sm w-[287px] p-3">
              Career
            </h5>
            <p className="font-mont font-bold text-lg w-[287px]">
              Why you should work as a team even on small projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
