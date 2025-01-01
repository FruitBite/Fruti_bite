"use client";
import React, { useEffect, useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import { Instagram, MessageCircleMore } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const herocontainer = useRef(null);
  const heroInview = useInView(herocontainer, { once: false });
  const Herocontrols = useAnimation();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    Herocontrols.start(heroInview ? "visible" : "hidden");
  }, [heroInview, Herocontrols]);
  return (
    <motion.div
      ref={herocontainer}
      variants={variants}
      initial="hidden"
      animate={Herocontrols}
      className="bg-PRIMARY flex items-center justify-center flex-col md:flex-row relative w-full md:bg-white "
    >
      <div className="w-full flex  justify-center py-10 md:h-[90vh] md:w-1/2 flex-col px-10 leading-loose gap-2">
        <motion.h1
          className="text-7xl md:text-6xl lg:text-8xl font-bold text-white md:text-PRIMARY"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={heroInview ? "visible" : "hidden"}
          transition={{ delay: 0.5, type: "spring" }}
        >
          Healthy
        </motion.h1>
        <motion.h1
          className="text-7xl md:text-6xl lg:text-8xl font-bold text-SECONDARY"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={heroInview ? "visible" : "hidden"}
          transition={{ delay: 0.6, type: "spring" }}
        >
          Habits
        </motion.h1>
        <motion.p
          className="text-3xl md:w-2/3 lg:text-3xl"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={heroInview ? "visible" : "hidden"}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Start Here
        </motion.p>
        <motion.div
          className="hidden md:block md:mt-5"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={heroInview ? "visible" : "hidden"}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Button text={"View Plans"} style={"primary"} link={"#plans"} />
        </motion.div>
        <motion.div
          className="block md:hidden mt-2"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={heroInview ? "visible" : "hidden"}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <Button text={"View Plans"} style={"secondary"} link={"#plans"} />
        </motion.div>
      </div>
      <div className="hidden md:block  absolute bg-white p-2 rounded-full md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Image
          src="/FruitBowl.png"
          alt="Fruit bowl"
          width={1000}
          height={0}
          className="w-72 md:w-72 lg:w-96 animate-spin-slow"
        />
      </div>
      <div className="hidden  md:block w-1/2 bg-PRIMARY  h-[90vh]">
        <div className="relative w-full h-full flex  items-center justify-center ">
          <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[30%]"></div>
          <div className="bg-[#ffd365] h-full w-[.1rem] absolute left-[55%]"></div>
          <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[80%]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-8">
            <motion.h1
              className="font-bold text-7xl text-[#F4F1E7]/50"
              style={{ letterSpacing: "3rem" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              initial="hidden"
              animate={heroInview ? "visible" : "hidden"}
              transition={{ delay: 0.9, type: "spring" }}
            >
              FRUITS
            </motion.h1>
          </div>
          <div className="flex gap-5 flex-col items-end w-full px-10">
            <motion.div
              className="rounded-full bg-white p-2 w-fit"
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              initial="hidden"
              animate={heroInview ? "visible" : "hidden"}
              transition={{ delay: 1, type: "spring" }}
            >
              <Link href="https://www.instagram.com/fruitbit_e?igsh=ZThlNmh5dGE0dW90">
                <Instagram />
              </Link>
            </motion.div>
            <motion.div
              className="rounded-full bg-white p-2 w-fit"
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              initial="hidden"
              animate={heroInview ? "visible" : "hidden"}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <Link href="https://wa.me/9945322622">
                <Image
                  src="/whatsapp.svg"
                  alt="Fruit bowl"
                  width={25}
                  height={0}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Image
        src="/FruitBowl.png"
        alt="Fruit bowl"
        width={1000}
        height={0}
        className="w-72 md:w-96 p-1 bg-white rounded-full md:hidden animate-spin-slow"
      />
    </motion.div>
  );
};

export default Hero;
