"use client";
import React, { useRef, useEffect } from "react";
import HSBox from "../HSBox";
import { HeartPulse, Star, Clock, ShieldCheck } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const HighlightsSection = () => {
  const baseVariants = {
    visible: { x: 0, opacity: 1 },
    initial: { x: -100, opacity: 0 },
  };
  const ContainerVariants = {
    visible: { y: 0, opacity: 1 },
    initial: { y: -100, opacity: 0 },
  };
  const HSref = useRef(null);
  const isInview = useInView(HSref);
  const HScontorl = useAnimation();
  const HSconainercontorl = useAnimation();

  useEffect(() => {
    console.log(isInview);
    HScontorl.start(isInview ? "visible" : "initial");
    HSconainercontorl.start(isInview ? "visible" : "initial");
  }, [isInview, HScontorl, HSconainercontorl]);

  const items = [
    { icons: <HeartPulse />, title: "100%", paragraph: "Healthy" },
    { icons: <Star />, title: "4.9", paragraph: "Average Rating" },
    {
      icons: <Clock />,
      title: " Daily one box",
      paragraph:" Monday - Saturday | Timings Morning - 7 to 10 am | Evening - 4 to 7 pm",
    },
    {
      icons: <ShieldCheck />,
      title: "Holiday",
      paragraph: "Sunday & Festivals holiday ",
    },
  ];

  return (
    <motion.div
      className="py-20 w-full bg-PRIMARY md:px-20 px-10 relative"
      ref={HSref}
      variants={ContainerVariants}
      initial="initial"
      animate={HSconainercontorl}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -top-10 left-0"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/vitk.png" alt="vitk" width={100} height={0} />
      </motion.div>
      <motion.div
        className="absolute -bottom-10 right-0"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/vitE.png" alt="vitk" width={100} height={0} />
      </motion.div>
      <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <HSBox
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
            animation={HScontorl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HighlightsSection;
