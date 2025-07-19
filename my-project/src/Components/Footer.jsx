import React from "react";

const Footer = () => {
  return (
    <div className="bg-NewColor text-white flex  justify-around gap-4 py-[10px] px-[10px]">
      <div className="w-[274px] h-[209px]">
        <h2>Brainwave.io</h2>
        <p>
          With lots of unique tricks you can build a page without coding.Build
          your next landing page
        </p>
      </div>
      <div className="w-[144px] h-[206px]">
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="w-[125px] h-[246px]">
        <ul>
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>News</li>
          <li>Helpdesk</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="w-[156] h-[206px]">
        <ul>
          <li>Services</li>
          <li>Digital Marketing</li>
          <li>Content Writing</li>
          <li>Seo for Business</li>
          <li>UI Design</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Legal</li>
          <li>Policy</li>
          <li>Terms and Conditions</li>
          <li>Return Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
