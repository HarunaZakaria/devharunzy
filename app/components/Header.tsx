import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import backgroundImage from "@/public/background.jpg";

const Header = () => {
  return (
    <div className="header-container w-full flex flex-col items-center justify-between pt-12 header">
      <Image
        src={backgroundImage}
        alt="background Image"
        placeholder="blur"
        quality={75}
        fill
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="header flex  justify-between w-full">
        <div className="logo">
          <h1 className="text-2xl font-bold logo">Dev.Harunzy</h1>
        </div>
        <Navbar />
        <div className="contact flex justify-center items-center align-center gap-4">
          <p className="text-lg font-medium lets-talk">Let's talk</p>
        </div>
        <div>
          <i className="ph ph-list hamburger"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
