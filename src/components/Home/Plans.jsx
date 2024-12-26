"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Plan_name } from "@/utils/Plans";
import { motion, useInView, useAnimation } from "framer-motion";

const Plans = () => {
  const planref = useRef(null);
  const plancont = useRef(null);
  const isInView = useInView(planref, { once: false });
  const isInViewplans = useInView(plancont, { once: false });
  const mainControls = useAnimation();
  const planControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }

    if (isInViewplans) {
      planControls.start("visible");
    } else {
      planControls.start("hidden");
    }
  }, [isInView, mainControls, isInViewplans, planControls]);
  const transition = {
    type: "spring",
    stiffness: 146,
    damping: 42,
    mass: 1.7,
    velocity: 5,
  };

  return (
    <div
      className=" w-full h-fit md:h-screen flex flex-col gap-10 items-center bg-PRIMARY relative pb-20 md:pb-0"
      ref={planref}
    >
      <motion.div
        className="w-full h-fit flex flex-col gap-10 items-center bg-PRIMARY relative pb-20 md:pb-0"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={transition}
      >
        <Image
          src="/Nuts.png"
          alt="Nuts"
          width={500}
          height={500}
          className="w-56 absolute -top-16 left-0 md:left-10"
        />

        {/* <div>
          hi
        </div> */}
        {/* 
        <motion.div
          className="w-56 absolute -top-10 left-0 md:left-10"
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
        </motion.div> */}

        <div className="py-10 mt-16 md:mt-0">
          <div className="text-white relative">
            <Image
              src="/Leaf.png"
              alt="Leaf image"
              width={200}
              height={200}
              className="w-28 rounded-full absolute -top-14 -left-16 -rotate-45"
            />
            <h1 className="text-4xl font-bold">OUR</h1>
          </div>
          <h1 className="text-black text-7xl font-bold ml-10">Plans</h1>
        </div>

        <motion.div
          className="flex gap-10 flex-wrap items-center justify-center"
          ref={plancont}
        >
          {Plan_name.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, scale: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0, y: 100 },
                }}
                initial="hidden"
                animate={planControls}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  type: "spring",
                }}
                className="w-72 h-96 rounded-xl md:w-96 md:h-96 px-5 bg-white/25 text-black flex justify-center gap-6 flex-col"
              >
                <div>
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="text-lg text-black">{item.value}</p>
                </div>
                <div>
                  <span className="text-3xl font-bold">₹{item.price}</span>
                  /month
                </div>
                <ul className="flex flex-col gap-2">
                  {item.items.map((giveitems, index) => {
                    return (
                      <li className="flex gap-2 text-lg" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-7 h-7 text-SECONDARY flex-shrink-0 font-semibold"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        {giveitems}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#contact"
                  className="bg-SECONDARY/70 hover:bg-SECONDARY text-white p-2 rounded-full text-center font-semibold text-md"
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Plans;
