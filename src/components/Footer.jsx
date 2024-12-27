"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="bg-PRIMARY text-green-100 p-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-black">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <Image src="/Logo.png" alt="logo" width={200} height={100} />
          </div>
          <p className="mt-2 italic">Healthy Habits Start here</p>
          {/* Social Icons */}
          <div className="flex mt-2 space-x-4">
            <Link
              href="https://www.instagram.com/fruitbit_e?igsh=ZThlNmh5dGE0dW90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-SECONDARY transition-all"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </Link>
            <Link
              href="https://wa.me/9945322622"
              className="text-black hover:text-SECONDARY transition-all"
              aria-label="Chat"
            >
              <MessageCircleMore size={28} />
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            At Fruit Bites, we believe that starting your day with a healthy
            meal paves the way for a vibrant lifestyle. Our mission is to
            deliver freshly cut fruits, crunchy nuts, nutritious dry fruits,
            sprouts, boiled items, and fresh vegetables to your doorstep. With a
            focus on hygiene and quality, we make enjoying a convenient and
            wholesome breakfast effortless.
          </p>
        </div>

        {/* Second Column (Pages Links) */}
        <div className="flex justify-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <div className="flex flex-col gap-2 font-bold text-base">
              <Link
                className="hover:pl-4 hover:text-SECONDARY transition-all"
                href="/"
              >
                Home
              </Link>
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
            Email: <span className="font-bold">fruitbite2025@gmail.com</span>
          </p>
          <p className="text-sm mt-2">
            Address:{" "}
            <span className="font-bold">
              Sy.119, Doddathoguru, Electronics City Phase 1, Electronic City,
              Bengaluru, Karnataka 560100{" "}
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