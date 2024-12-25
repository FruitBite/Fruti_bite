"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Mobile_navbar from "./Client_comp/Mobile_navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden sticky top-0 left-0 w-full md:flex justify-between items-center z-50 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex">
          <Image
            src="/logo.webp"
            alt="Fruit Bite Logo"
            width={60}
            height={50}
            className=" px-2 py-2 hidden md:block"
            priority
          />

          <Image
            src="/Logo.png"
            alt="Fruit Bite Logo"
            width={200}
            height={50}
            className="px-4 py-4 hidden md:block "
            priority
          />
        </div>
        <div
          className={`${
            isScrolled ? "bg-white" : "lg:bg-white"
          } w-1/2 hidden lg:block relative`}
        >
          <ul className="flex gap-10 px-5 py-4 relative z-10">
            {["Home", "Plans", "Collections", "About Us", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="font-semibold text-[18px]"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full flex justify-between items-center z-50 transition-all bg-white">
        <Mobile_navbar />
      </div>
    </>
  );
};

export default Navbar;
