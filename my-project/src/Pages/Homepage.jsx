import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Reasons from "./../Components/Reasons";
import Testimonials from "./../Components/Testimonials";
import Footer from "./../Components/Footer";
import Services from "../Components/Services";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Homepage;
