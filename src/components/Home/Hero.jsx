"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Instagram, MessageCircleMore, X } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

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
    // <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-PRIMARY overflow-hidden">
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-SECONDARY block">Healthy Habits</span>
              <span className="text-white md:text-PRIMARY block">
                Starts Here
              </span>
            </h1>
            <p className="text-xl text-black max-w-xl">
              Experience the future of fruit delivery with our curated boxes of
              premium, hand-picked fresh fruits delivered right to your
              doorstep.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="#contact">
              <button
                className="group flex items-center gap-2 px-8 py-4 bg-SECONDARY text-white rounded-full font-semibold transition-all "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start your box
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="#plans">
              <button className="px-8 py-4 border-2 border-SECONDARY text-SECONDARY rounded-full font-semibold transition-all hover:bg-SECONDARY hover:text-white">
                Our Plans{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative order-1 lg:order-2 bg-PRIMARY">
          <div className="animate-spin-slow">
            <Image
              src="/hero.png"
              alt="Fresh Fruits Collection"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <Image
        src="/FruitBowl.png"
        alt="Fruit bowl"
        width={1000}
        height={0}
        className="w-72 md:w-96 p-1 bg-white rounded-full md:hidden"
      />
    </motion.div>
  );
};

export default Hero;
