"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full md:h-[90vh] flex md:flex-row flex-col">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
          }}
        >
          <Image
            src="/FruitBasket.png"
            alt="FruitBowl"
            width={1000}
            height={1000}
            className="lg:w-96 lg:h-96 md:w-[18rem] md:h-[18rem] object-contain hidden md:block"
          />
        </motion.div>
      </div>

      <div className="relative bg-PRIMARY w-full md:w-1/2 px-10 flex items-center md:items-start justify-center flex-col gap-5 py-10 md:py-0 ">
        <motion.div
          className="absolute top-0 h-[20px] bg-white w-full -left-0  md:hidden "
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        ></motion.div>
        <div className="z-10">
          <h1 className="text-7xl lg:text-8xl md:text-6xl font-bold text-SECONDARY">
            Green
          </h1>
          <h1 className="text-7xl lg:text-8xl md:text-6xl font-bold text-white ml-10">
            Quality
          </h1>
        </div>
        <p className="text-xl lg:text-xl md:text-base">
          We believe in the power of natural foods to transform lives!
        </p>
        <Button text={"View More"} style={"secondary"} link={"#"} />
        <motion.div
          className="absolute -bottom-10 right-0 block md:hidden"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/Orange.png"
            alt="Orange"
            width={500}
            height={0}
            className="w-20 bg-white p-2 rounded-full"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full  justify-end hidden md:flex"
        >
          <Image
            src="/Orange.png"
            alt="Orange"
            width={500}
            height={0}
            className="w-20 bg-white p-2 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
