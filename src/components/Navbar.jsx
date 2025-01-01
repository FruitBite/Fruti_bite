"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Mobile_navbar from "./Client_comp/Mobile_navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = window.innerHeight * 0.15; // 20vh offset
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`sticky top-0 left-0 w-full md:flex justify-between items-center z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex">
        <Image
          src="/logo.webp"
          alt="Fruit Bite Logo"
          width={70}
          height={50}
          className="py-2 px-4 hidden md:block"
        />
        <Image
          src="/Logo.png"
          alt="Fruit Bite"
          width={200}
          height={60}
          className="px-4 py-2 hidden md:block"
        />
      </div>
      <div
        className={`${
          isScrolled ? "bg-white" : "lg:bg-PRIMARY"
        } w-1/2  hidden lg:block relative py-3`}
      >
        {!isScrolled && (
          <>
            <div className="bg-[#ffd365]  h-full w-[.15rem] absolute left-[30%]"></div>
            <div className="bg-[#ffd365]  h-full w-[.1rem] absolute left-[55%]"></div>
            <div className="bg-[#ffd365]  h-full w-[.15rem] absolute left-[80%]"></div>
          </>
        )}

        <ul className="flex gap-10 px-5 py-4 ">
          <li
            onClick={() => scrollToSection("home")}
            className="font-semibold z-10 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("plans")}
            className="font-semibold z-10 cursor-pointer"
          >
            Plans
          </li>
          <li
            onClick={() => scrollToSection("collections")}
            className="font-semibold z-10 cursor-pointer"
          >
            Collections
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="font-semibold z-10 cursor-pointer"
          >
            About Us
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="font-semibold z-10 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="md:hidden w-full flex justify-between items-center z-50 transition-all bg-white py-2">
        <Mobile_navbar />
      </div>
    </div>
  );
};

export default Navbar;
