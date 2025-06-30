import React from "react";
import Heading from "./mini-components/Heading";
import NewBtn from "./mini-components/NewBtn";

const Hero = () => {
  return (
    <div className="ml-[20px] mb-[20px]">
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
