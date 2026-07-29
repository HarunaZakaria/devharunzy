import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container w-full flex flex-col items-center justify-center pt-12 header">
      <div className="header flex  justify-between w-full">
        <div className="logo">
          <h1 className="text-2xl font-bold logo">Dev.Harunzy</h1>
        </div>
        <Navbar />
        <div className="contact flex justify-center items-center align-center gap-4">
          <p>Let's talk</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
