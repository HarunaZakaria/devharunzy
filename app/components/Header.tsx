import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-container w-full flex flex-col items-center justify-center pt-12">
      <div className="header flex  justify-between w-full">
        <div className="logo">
          <h1 className="text-2xl font-bold">Dev.Harunzy</h1>
        </div>
        <Navbar />
        <div>
          <p>Let's talk</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
