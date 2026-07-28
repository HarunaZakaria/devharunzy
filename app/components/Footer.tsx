import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6 w-full mt-12 flex justify-center items-center align-center">
        <div className="flex justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
