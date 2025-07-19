import React from "react";

const Featurejobs = () => {
  return (
    <div>
      <div className="flex justify-around py-[50px] px-[245px]">
        <div className="w-[505px] h-[129px]">
          <h3 className="font-mont font-bold font-3xl">Features Jobs</h3>
          <p className="font-mont font-normal text-lg">
            With lots of unique blocks you can create your own code
          </p>
        </div>
        <div>
          <img src="Nav.svg" alt="Navigation" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="bg-brainyCream rounded-md w-[255px] h-[269px]">
          <h5 className="text-babyGreen font-mont font-bold text-sm py-[29px] px-[32px]">
            FULL TIME
          </h5>
          <h2 className="font-mont font-bold text-lg px-[32px] py-[10px]">
            Senior Software Engineer
          </h2>
          <p className="font-mont font-normal text-sm px-[32px] py-[10px]">
            New York USA
          </p>
          <div className="flex py-[10px]">
            <img className="px-[32px]" src="Logo.svg" alt="Logo" />
            <h4 className="font-mont font-bold text-lg">Dorfus</h4>
          </div>
        </div>
        <div className="bg-brainyCream rounded-md w-[255px] h-[269px]">
          <h5 className="text-babyBlue font-mont font-bold text-sm px-[32px] py-[29px]">
            REMOTE
          </h5>
          <h2 className="font-mont font-bold text-lg px-[32px] py-[10px]">
            Product Designer
          </h2>
          <p className="font-mont font-normal text-sm px-[32px] py-[10px]">
            California USA
          </p>
          <div className="flex py-10">
            <img className="px-[32px]" src="Logo2.svg" alt="Logo" />
            <h4 className="font-mont font-bold text-lg">Coworks</h4>
          </div>
        </div>
        <div className="bg-brainyCream rounded-md w-[255px] h-[269px]">
          <h5 className="font-mont font-bold text-babyGreen text-sm  px-[32px] py-[29px]">
            FULL TIME
          </h5>
          <h2 className="font-mont font-bold text-lg px-[32px] py-[10px]">
            Ux Designer
          </h2>
          <p className="font-mont font-normal text-sm px-[32px] py-[10px]">
            California USA
          </p>
          <div className="flex py-[28px]">
            <img className="px-[32px]" src="Logo3.svg" alt="Logo" />
            <h4 className="font-mont font-bold text-lg">Askimat</h4>
          </div>
        </div>
        <div className="rounded-md bg-brainyCream w-[255px] h-[269px]">
          <h5 className="font-mont font-bold text-red-700 text-sm px-[32px] py-[29px]">
            PART-TIME
          </h5>
          <h2 className="font-mont font-bold text-lg px-[32px] py-[10px]">
            FullStack Web Developer
          </h2>
          <p className="  font-mont font-normal text-sm px-[32px] py-[10px] ">
            Kaylborough Sweden
          </p>
          <div className="flex gap-10 py-2">
            <img src="Logo4.svg" alt="" />
            <h4 className="font-mont font-bold text-lg">Greener</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurejobs;
