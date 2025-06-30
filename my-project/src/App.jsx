import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Reasons from "./Components/Reasons";
import CTA from "./Components/CTA";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth font-mont">
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
