"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Mobile_navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = window.innerHeight * 0.2; // 20vh offset
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });

      closeMenu(); // Close the menu after scrolling
    }
  };

  return (
    <>
      <div className="relative w-full flex justify-between items-center">
        <div className="flex gap-0">
          <Image
            src="/Logo.png"
            alt="Fruit Bite Logo"
            width={190}
            height={50}
            className="px-4 py-2"
            priority
          />
        </div>

        <button onClick={toggleMenu}>
          <Menu size={35} className="mr-5 cursor-pointer" />
        </button>
      </div>

      {isClicked && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed top-0 right-0 w-full h-screen bg-PRIMARY z-50 p-2 flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.2,
            }}
            className="w-full flex items-center justify-center"
          >
            <button onClick={closeMenu} className="bg-white p-2 rounded-full">
              <X size={30} />
            </button>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.3,
            }}
            className="w-full flex flex-col gap-6 items-center justify-center "
          >
            <a
              className="text-xl font-bold"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a onClick={closeMenu} className="text-xl font-bold" href="#plans">
              Plans
            </a>
            <a
              onClick={() => scrollToSection("collections")}
              className="text-xl font-bold"
            >
              Collections
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-xl font-bold"
            >
              About Us
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-xl font-bold"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Mobile_navbar;
