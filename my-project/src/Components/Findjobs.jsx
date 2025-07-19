import React from "react";

const Findjobs = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h2 className="font-mont font-bold text-4xl">
          Find jobs with three easy steps
        </h2>
        <p className="font-normal font-mont">
          With lots of unique building blocks you can start building your
          landing page
        </p>
      </div>

      <div className="flex px-[245px] gap-5 ">
        <div className="w-[425px] h-[571px] rounded-lg">
          <img src="Findjobs.svg" alt="Find jobs" className="rounded-lg" />
        </div>
        <div className="py-20">
          <div className="flex gap-4 py-5 ">
            <img src="Fj_icon_1.svg" alt="jobs icon" />
            <div>
              <h3 className="font-mont font-bold text-xl">Search for a job</h3>
              <p className="font-normal font-mont text-sm">
                With lots of unique blocks you can build your project
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="Fj_icon_2.svg" alt="jobs icon" />
            <div>
              <h3 className="font-mont font-bold text-xl py-2">
                Apply within our website
              </h3>
              <p className="font-mont font-normal text-sm">
                With lots of unique blocks you can build your project
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="Fj_icon_3.svg" alt="jobs icon" />
            <div>
              <h3 className="font-mont font-bold text-xl py-2">
                Get an interview call
              </h3>
              <p className="font-mont font-normal text-sm">
                With lots of unique blocks you can build your project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findjobs;
