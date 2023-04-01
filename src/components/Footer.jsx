import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center gap-2">
        <BsChatSquareDots size={30} className="text-[var(--primary-dark)]" />
        <h1 className="text-xl font-bold text-gray-700">WeekAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;
