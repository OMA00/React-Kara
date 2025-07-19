import React from "react";
import NewBtn from "./mini-components/NewBtn";
import { Link } from "react-router-dom";
import Seconpage from "./../Pages/Seconpage";

const Navbar = () => {
  return (
    <nav className="flex h-max px-12 py-5 bg-white items-center justify-between fixed top-0 left-0 min-w-full">
      <div className="font-bold font-Rub text-28px ">
        <Link to="/">Brainwave.io</Link>
      </div>

      <div className="flex items-center justify-center gap-10 font-mont">
        <ul className="text-[15px] font-bold space-x-11">
          <Link to="/">Demos</Link>
          <Link to="/">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">Contact</Link>
        </ul>

        <div>
          <NewBtn btnText="Get a free quote" className="w-[168px] h-[45px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
