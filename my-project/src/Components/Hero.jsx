import React from "react";
import NewBtn from "./mini-components/NewBtn";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "back_pattern.svg" }}
      className="min-h-screen px-[213px] grid grid-cols-2 items-center gap-10 mt-12"
    >
      <div className="w-[474px] h-[362px]">
        <h1 className="font-bold font-mont text-5xl leading-[58px]">
          Make your business powerful with shade
        </h1>
        <p className="mt-4">
          With lots of unique blocks you can easily build a page without
          coding.Build your next consultancy website within minutes
        </p>
        <NewBtn
          btnText="Get a free Quote"
          className="width-[210px] h-[59px] mt-8 text-sm"
        />
        <span className="text-sm font-bold block mt-7">
          Watch how we can help
        </span>
      </div>

      <div>
        <img src="hero_pattern.svg" alt="Hero img" />
      </div>
    </section>
  );
};

export default Hero;
