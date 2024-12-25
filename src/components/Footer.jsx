"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      className="bg-PRIMARY text-green-100 p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-black">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <Image src="/Logo.png" alt="logo" width={200} height={100} />
          </div>
          <p className="mt-2 italic">where you meet a healthier you!</p>
          <p className="mt-4 text-sm leading-relaxed">
            At Fruit Bites, we believe that a healthy start to your day sets the
            tone for a vibrant life. Our mission is to deliver freshly cut
            fruits, crunchy nuts, nutritious dry fruits, sprouts, boiled items,
            and vegetables right to your doorstep. We ensure hygiene and quality
            at every step to offer you a convenient, delicious, and nutritious
            breakfast.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="/" className="bg-white p-2 rounded-lg">
              <Instagram size={24} />
            </a>
            <a href="/" className="bg-white p-2 rounded-lg">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Second Column (Pages Links) */}
        <div className="flex justify-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <div className="flex flex-col gap-2 font-bold text-base">
              <a
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="/"
              >
                Home
              </a>
              <a
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="#plans"
              >
                Plans
              </a>
              <a
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="#collections"
              >
                Collections
              </a>
              <a
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="#about"
              >
                About
              </a>
              <a
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Third Column (Our Info) */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Our Info</h3>
          <p className="text-sm">
            WhatsApp: <span className="font-bold">+91 9945322622</span>
          </p>
          <p className="text-sm mt-2">
            Email: <span className="font-bold">fruitbites@gmail.com</span>
          </p>
          <p className="text-sm mt-2">
            Address:{" "}
            <span className="font-bold">
              Chikkaap road, Beng District, Karnataka
            </span>
          </p>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="mt-4 text-center text-sm text-black">
        Copyright © Street2Site. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
