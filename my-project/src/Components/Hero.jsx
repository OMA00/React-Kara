import React from "react";
import Heading from "./mini-components/Heading";
import NewBtn from "./mini-components/NewBtn";
import DetailsComponents from "./mini-components/DetailsComponents";

const Hero = () => {
  return (
    <div className="ml-[20px] mb-[20px]">
      <DetailsComponents
        title="Make your business powerful with shade"
        details="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
        btnText="Get a free quote"
      />

      <NewBtn
        className="rounded-md bg-slate-500 w-[60px] h-[45px] pl-[5px] pr-[5px]"
        btnText="Click me"
      />

      <Heading
        className={`font-bold text-4xl capitalize`}
        headingText={`Hero Heading`}
      />
    </div>
  );
};

export default Hero;
