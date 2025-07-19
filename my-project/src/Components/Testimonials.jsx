import React from "react";

const Testimonials = () => {
  return (
    <div className="px-[245px]">
      <div className="text-center items-center justify-center py-[20px]">
        <h1 className="font-bold text-3xl font-mont py-[10px]">
          What people say about us
        </h1>
        <p>
          With lots of building blocks you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 py-[20px]">
        <div>
          <img
            className="w-[54px] h-[54px] py-[10px]"
            src="Oval1.svg"
            alt="Testimonial Image"
          />
          <p class="font-mont  text-sm py-[5px]">
            You made it sosimple my new site is easier and faster to work with
            than my old site
          </p>
          <span className="flex font-mont py-[5px] gap-2">
            <h5 className="font-bold text-sm">Isabella Chavez</h5> Designer
          </span>
        </div>
        <div>
          <img
            className="w-[54px] h-[54px] py-[10px]"
            src="Oval2.svg"
            alt="Testimonial Image"
          />
          <p class="font-mont text-sm py-[5px]">
            Simply the best better than all the rest. i will recommend this
            product to both advanced and new users
          </p>
          <span className="flex font-mont py-[5px] gap-2">
            <h5 className="font-bold text-sm">Carlos Rhodes</h5>Digital Marketer
          </span>
        </div>
        <div>
          <img
            className="w-[54px] h-[54px] py-[10px]"
            src="Oval3.svg"
            alt="Testimonial Image"
          />
          <p class="font-mont text-sm py-[5px]">
            Must have book for all those who want me to be product designer or
            Interaction designer
          </p>
          <span className="flex font-mont py-[5px] gap-2">
            <h5 className="font-bold text-sm">Lucas Mann</h5>Founder
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
