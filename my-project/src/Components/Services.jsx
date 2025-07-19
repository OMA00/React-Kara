import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen px-[180px] bg-brainyCream">
      <div className="text-center  items-center justify-center py-[50px]">
        <h1 className="font-bold text-4xl items-center justify-center font-mont">
          Services we offer you
        </h1>
        <p className="font-mont py-[10px] text-center">
          With lots of unique blocks you can easily build a page without
          coding.Build your next landing page
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 w-[1110px] h-[377px]">
        <div>
          <h1 className="font-bold text-xl px-[5px] py-[5px]">
            DIGITAL MARKETING
          </h1>
          <img
            className="rounded-xl py-[10px]"
            src="digital_marketing.svg"
            alt="Digtal Marketing"
          />
          <p className="font-mont text-lg py-[10px]">
            With lots of unique blocks you can easily build a page without
            coding. Build your next landing page
          </p>
          <span>Learn more</span>
        </div>
        <div>
          <h1 className="font-bold text-xl px-[5px] py-[5px]">
            BUSINESS GROWTH
          </h1>
          <img
            className="rounded-xl py-[10px]"
            src="business_growth.svg"
            alt="Business Growth"
          />
          <p className="font-mont text-lg py-[10px]">
            With lots of unique blocks you can easily build a page without
            coding. Build your next landing page
          </p>
          <span>Learn more</span>
        </div>
        <div>
          <h1 className="font-bold text-xl px-[5px] py-[5px]">
            CONTENT MARKETING
          </h1>
          <img
            className="rounded-xl py-[10px]"
            src="content_marketing.svg"
            alt="Content Marketing"
          />
          <p className="font-mont text-lg py-[10px]">
            With lots of unique blocks you can easily build a page without
            coding. Build your next landing page
          </p>
          <span>Learn more</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
