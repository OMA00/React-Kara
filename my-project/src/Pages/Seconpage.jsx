import React from "react";
import Navbar_s from "../Components/Navbar_s";
import Hero_s from "../Components/Hero_s";
import Category from "../Components/Category";
import Findjobs from "../Components/Findjobs";
import News from "../Components/News";
import Featurejobs from "../Components/Featurejobs";
import Footer from "../Components/Footer";

const Seconpage = () => {
  return (
    <div>
      <Navbar_s />
      <Hero_s />
      <Category />
      <Findjobs />
      <Featurejobs />
      <News />
      <Footer />
    </div>
  );
};

export default Seconpage;
