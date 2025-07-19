import React from "react";
import NewBtn from "./mini-components/NewBtn";

const Hero_s = () => {
  return (
    <section className="relative min-h-screen px-[245px] flex items-cente= gap-10 mt-12">
      <div className="w-[731px] h-[402px]">
        <h1 className="font-mont font-bold text-4xl w-[492px] h-[195px] py-20">
          Find a dream job that changes your life.
        </h1>
        <p className="font-mont font-normal text-sm w-[300px] h-[64px]">
          With lots of unique blocks you can easily build a page without coding.
          Get your next gig in minutes
        </p>

        <div className="flex w-[730px] h-[95px] bg-babyBlue p-5 rounded-md gap-5">
          <input
            className="rounded-md w-[250px] h-[50px] "
            type="text"
            placeholder="job title or Keyword"
          />
          <input
            className="rounded-md w-[250px] h-[50px] px-3"
            type="text"
            placeholder="City"
          />
          <NewBtn
            className="rounded-md w-[157px] h-[51px] p-5 bg-black gap-2"
            btnText="Search"
          />
        </div>
      </div>
      <div className="w-[485px] h-[685px] ">
        <img src="hero_s.svg" alt="Hero Image" />
      </div>
    </section>
  );
  ("");
};

export default Hero_s;
