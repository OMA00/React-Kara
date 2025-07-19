import React from "react";
import NewBtn from "./mini-components/NewBtn";

const Info = () => {
  return (
    <section className="min-h-screen px-[214px]  flex justify-center item-center mt-12 gap-10">
      <div className="w-[346px] h-[290px]">
        <h1 className="text-bold font-mont text-5xl py-4">
          Experienced Experts are giving advices.
        </h1>
        <p className="font-mont font-normal py-3">
          With lots of unique blocks you can esaily build a page without
          coding.Build your next landing page.
        </p>
        <NewBtn btnText="Learn how we work" className="w-[203px] h-[50px]" />
      </div>
      <div className="">
        <img
          className="w-[308px] h-[400px]"
          src="pic_info.png"
          alt="Info Pic"
        />
      </div>
      <div>
        <div>
          <h1 className="font-mont text-bold text-5xl">1M+</h1>
          <p className="font-mont font-normal py-5">
            Customers visit albino every month to get their work done
          </p>
        </div>
        <div>
          <h1 className="font-mont text-bold text-5xl">92%</h1>
          <p className="font-mont font-normal py-5">
            Satisfaction rate comes from our awesome customers
          </p>
        </div>
        <div>
          <h1 className="font-mont text-bold text-5xl">4.9/5.0</h1>
          <p className="font-mont font-normal py-5">
            Average customer ratings we have all over the internet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
