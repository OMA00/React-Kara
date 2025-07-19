import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./../Pages/Homepage";

const Navbar_s = () => {
  return (
    <nav className="flex h-max px-12 py-5 bg-white fixed top-0 left-0 min-w-full justify-around ">
      <div className="font-bold font-Rub text-28px">
        <Link to="/">Brainwave.io</Link>
      </div>

      <div className="flex items-center justify-center gap-10 font-mont">
        <ul className="text-[15px] font-mont space-x-11">
          <Link to="/">Demos</Link>
          <Link to="/">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">Contact</Link>
        </ul>
      </div>

      <div className="flex font-mont">
        <ul className="text-[15px] font-mont space-x-11">
          <Link to="/">login</Link>
          <Link to="/">Signup</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_s;
