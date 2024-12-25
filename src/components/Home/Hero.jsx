"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-PRIMARY overflow-hidden">
    {/* <div className="relative w-full min-h-screen bg-white overflow-hidden"> */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-SECONDARY block">Healthy Fruits</span>
              <span className="text-white md:text-PRIMARY block">Every Day Delivery</span>
            </h1>
            <p className="text-xl text-black max-w-xl">
              Experience the future of fruit delivery with our curated boxes of
              premium, hand-picked fresh fruits delivered right to your
              doorstep.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="group flex items-center gap-2 px-8 py-4 bg-SECONDARY text-white rounded-full font-semibold transition-all "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start your box
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border-2 border-SECONDARY text-SECONDARY rounded-full font-semibold transition-all hover:bg-SECONDARY hover:text-white">
              Learn more
            </button>
          </div>
        </div>

        <div className="flex-1 relative order-1 lg:order-2">
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
    </div>
  );
};

export default Hero;