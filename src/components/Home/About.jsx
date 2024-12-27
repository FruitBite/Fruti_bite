"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Button from "../Button";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const aboutcontainer = useRef(null);
  const aboutInview = useInView(aboutcontainer, { once: false });
  const aboutcontrols = useAnimation();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    aboutcontrols.start(aboutInview ? "visible" : "hidden");
  }, [aboutInview, aboutcontrols]);
  return (
    <motion.div
      className=" w-full md:h-[60vh] flex md:flex-row flex-col"
      ref={aboutcontainer}
      variants={variants}
      initial="hidden"
      animate={aboutcontrols}
    >
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
            src="/fruit-basket.png"
            alt="FruitBowl"
            width={1000}
            height={1000}
            className="lg:w-96 lg:h-96 md:w-[18rem] md:h-[18rem] object-contain hidden md:block scale-125"
          />
        </motion.div>
      </div>

      <div className="relative bg-PRIMARY w-full md:w-1/2 px-10 flex items-center md:items-start justify-center flex-col gap-5 py-10 md:py-0 ">
        <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[30%] hidden md:block"></div>
        <div className="bg-[#ffd365] h-full w-[.1rem] absolute left-[55%] hidden md:block"></div>
        <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[80%] hidden md:block"></div>
        <div className="z-10">
          <motion.h1
            className="text-7xl lg:text-8xl md:text-6xl font-bold text-SECONDARY"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={aboutInview ? "visible" : "hidden"}
            transition={{ delay: 0.5, type: "spring" }}
          >
            Green
          </motion.h1>
          <motion.h1
            className="text-7xl lg:text-8xl md:text-6xl font-bold text-white ml-10"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            initial="hidden"
            animate={aboutInview ? "visible" : "hidden"}
            transition={{ delay: 0.6, type: "spring" }}
          >
            Quality
          </motion.h1>
        </div>
        <motion.p
          className="text-xl lg:text-xl md:text-base z-10"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={aboutInview ? "visible" : "hidden"}
          transition={{ delay: 0.7, type: "spring" }}
        >
          Boost Your Health and Wellbeing with our Nature&apos;s Candy
        </motion.p>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          initial="hidden"
          animate={aboutInview ? "visible" : "hidden"}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <Button text={"View More"} style={"secondary"} link={"#plans"} />
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
          className="absolute -bottom-10 right-0 "
        >
          <Image
            src="/Orange.png"
            alt="Orange"
            width={500}
            height={0}
            className="w-20 bg-white p-2 rounded-full "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;