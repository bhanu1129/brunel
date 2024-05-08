import React from "react";

const Footer = () => {
  return (
    <footer className="text-lg flex justify-between bg-[#f5f5f5] rounded-[3rem] px-10 py-16 m-10">
      <div className="flex items-center gap-3">
        <span className="text-2xl">©</span>
        <span>Talup 2023. All rights reserved</span>
      </div>

      <div className="flex gap-10 font-light underline cursor-pointer text-[#525252]">
        <a>Terms & Conditions</a>
        <a>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
