import React from "react";
import Heading from "./mini-components/Heading";
const testimonialData = [
  {
    id: 1,
    userImg: "/user_t.svg",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    userName: "Isabella Chavez",
    userJD: "Graphic Designer",
  },
  {
    id: 2,
    userImg: "/user_t.svg",
    quote:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    userName: "Curtis Rhodes",
    userJD: "Digital Marketer",
  },
  {
    id: 3,
    userImg: "/user_t.svg",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    userName: "Isabella Chavez",
    userJD: "Graphic Designer",
  },
  {
    id: 4,
    userImg: "/user_t.svg",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    userName: "Isabella Chavez",
    userJD: "Graphic Designer",
  },
  {
    id: 5,
    userImg: "/user_t.svg",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    userName: "Isabella Chavez",
    userJD: "Graphic Designer",
  },
  {
    id: 6,
    userImg: "/user_t.svg",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    userName: "Isabella Chavez",
    userJD: "Graphic Designer",
  },
];

const Testimonials = () => {
  if (testimonialData.length === 0) {
    return (
      <div
        className="font-bold text-3xl text-red-500 capitalize min-h-[50vh] flex items-center justify-center
        "
      >
        No data points in response
      </div>
    );
  }

  if (!testimonialData) {
    <div className="font-bold text-red-500capitalize min-h-[50vh] flex items-center justify-center">
      Data did not come
    </div>;
  }
  return (
    <section className="min-h-screen mt-[85px]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[36px]font-bold leading-6 mb-4">
          What people say about us
        </h2>
        <p className="font-light text-[19px]w-[40px] text-center">
          With lots of unique blocks you can still build a page without coding.
          Build your next landing page.
        </p>
      </div>
      <div>
        {testimonialData.map(({ id, quote, userImg, userName, userJD }) => (
          <div key={id}>
            <img src={userImg} alt={userName} />

            <p>{quote}</p>

            <div>
              <span>{userName}</span> <span>{userJD}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
