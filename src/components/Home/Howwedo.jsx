"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Box_comp from "../Box_comp";
import { Box, Truck, Leaf } from "lucide-react";
import Image from "next/image";

const Howwedo = () => {
  const baseVariants = {
    visible: { x: 0, opacity: 1 },
    initial: { x: -100, opacity: 0 },
  };
  const ImageVariants = {
    visible: { y: 0, opacity: 1 },
    initial: { y: 100, opacity: 0 },
  };
  const ContainerVariants = {
    visible: { y: 0, opacity: 1 },
    initial: { y: -100, opacity: 0 },
  };
  const Containerref = useRef(null);
  const isInview = useInView(Containerref);
  const Containercontorl = useAnimation();
  const Mainconainercontorl = useAnimation();

  useEffect(() => {
    Containercontorl.start(isInview ? "visible" : "initial");
    Mainconainercontorl.start(isInview ? "visible" : "initial");
  }, [isInview, Containercontorl, Mainconainercontorl]);

  const items = [
    {
      icons: <Leaf />,
      title: "100% Natural",
      paragraph: "All our fruit plans are Healthy and tasty",
    },
    {
      icons: <Truck />,
      title: "Fast Delivery",
      paragraph: " Monday - Saturday Timings | Morning - 7 to 10 am | Evening - 4 to 7 pm | Healthy Habits Start Here ",
    },
    {
      icons: <Box />,
      title: "Hygiene Boxes",
      paragraph:
        "We make sure to provide the Hygienic boxes daily for better Health.",
    },
  ];

  return (
    <motion.div
      className="bg-PRIMARY w-full px-10 py-20 relative"
      ref={Containerref}
      variants={Mainconainercontorl}
      initial="initial"
      animate={ContainerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute md:-bottom-20 md:left-64 -bottom-20 left-10"
        variants={ImageVariants}
        animate={Containercontorl}
        transition={{
          type: "spring",
          stiffness: 30,
        }}
      >
        <Image
          src="/howwedo.png"
          alt="howwedo"
          width={1000}
          height={100}
          className="w-[48rem]"
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 z-10 relative">
        {items.map((item, index) => (
          <Box_comp
            key={index}
            icons={item.icons}
            title={item.title}
            paragraph={item.paragraph}
            variants={baseVariants}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.2 * index,
            }}
            Containercontorl={Containercontorl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Howwedo;
