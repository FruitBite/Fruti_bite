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
  const isInview = useInView(HSref, {
    threshold: 0.2,
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const HScontrol = useAnimation();
  const HScontainercontrol = useAnimation();

  useEffect(() => {
    if (isInview) {
      HScontrol.start("visible");
      HScontainercontrol.start("visible");
    }
  }, [isInview, HScontrol, HScontainercontrol]);

  const items = [
    { icons: <HeartPulse />, title: "100%", paragraph: "Healthy" },
    { icons: <Star />, title: "4.9", paragraph: "Average Rating" },
    {
      icons: <Clock />,
      title: " Daily one box",
      paragraph: `Monday - Saturday | Timings Morning - 7 to 10 am | Evening - 4 to 7 pm`,
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
      animate={HScontainercontrol}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute -top-10 left-2"
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
              damping: 15,
            }}
            animation={HScontrol}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HighlightsSection;
