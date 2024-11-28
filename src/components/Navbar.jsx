import Image from "next/image";
import React from "react";
import Mobile_navbar from "./Client_comp/Mobile_navbar";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full flex justify-between items-center z-10 bg-white ">
      <Image
        src="/Logo.png"
        alt="Fruit Bite"
        width={500}
        height={0}
        className="w-[9.375rem] px-4 py-2"
      />
      <div className="lg:bg-PRIMARY w-1/2  hidden lg:block relative">
        <div className="bg-[#ffd365]  h-full w-[.15rem] absolute left-[30%]"></div>
        <div className="bg-[#ffd365]  h-full w-[.1rem] absolute left-[55%]"></div>
        <div className="bg-[#ffd365]  h-full w-[.15rem] absolute left-[80%]"></div>
        <ul className="flex gap-10 px-5 py-4 ">
          <a href="#home" className="font-semibold z-10">
            Home
          </a>
          <a href="#plans" className="font-semibold z-10">
            Plans
          </a>
          <a href="#collections" className="font-semibold z-10">
            Collections
          </a>
          <a href="#about" className="font-semibold z-10">
            About Us
          </a>
          <a href="#contact" className="font-semibold z-10">
            Contact
          </a>
        </ul>
      </div>
      <Mobile_navbar />
    </div>
  );
};

export default Navbar;
