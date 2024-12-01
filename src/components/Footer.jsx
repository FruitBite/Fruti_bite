"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-PRIMARY text-green-100 p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">⭐</div>
            <h1 className="text-2xl font-bold">fruit Bites</h1>
          </div>
          <p className="mt-2 italic">where you meet a healthier you!</p>
          <p className="mt-4 text-sm leading-relaxed">
            At fruit Bites, we believe that a healthy start to your day sets the
            tone for a vibrant life. Our mission is to deliver freshly cut
            fruits, crunchy nuts, nutritious dry fruits, sprouts, boiled items,
            and vegetables right to your doorstep. We ensure hygiene and quality
            at every step to offer you a convenient, delicious, and nutritious
            breakfast.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Our Info</h3>
          <p className="text-sm">WhatsApp: +91 80881879b</p>
          <p className="text-sm mt-2">Email: fruitbites@gmail.com</p>
          <p className="text-sm mt-4">
            Address:
            <br />
            chikkaap road
            <br />
            Beng District,
            <br />
            Kanrantaka
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-yellow-700 text-green-100 px-4 py-2 rounded-md hover:bg-green-600">
          📷 Instagram
        </button>
        <button className="bg-yellow-700 text-green-100 px-4 py-2 rounded-md hover:bg-green-600">
          📘 Facebook
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-yellow-300">
        Copyright © street2site . All rights reserved.
        
      </p>
    </motion.footer>
  );
};

export default Footer;
