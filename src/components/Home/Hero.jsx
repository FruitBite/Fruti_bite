"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "MORI",
    color: "from-green-600 to-orange-400",
  },
  {
    id: 2,
    title: "BERRY",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    title: "CITRUS",
    color: "from-orange-400 to-yellow-400",
  },
];

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.5,
          }}
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color}`}
        >
          <div className="relative h-full flex items-center justify-center">
            <motion.h1
              key={slides[currentSlide].title}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              className="text-[200px] font-bold text-white tracking-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <TextSlider />
    </div>
  );
};

export default Hero;
