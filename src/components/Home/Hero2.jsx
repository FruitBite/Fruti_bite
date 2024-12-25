"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";

const Hero2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-[#ffbb0f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left content section - Order 2 on mobile, 1 on desktop */}
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-green-500 block">Healthy Fruits</span>
              <span className="text-red-500 block">Every Day Delivery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Experience the future of fruit delivery with our curated boxes of
              premium, hand-picked fresh fruits delivered right to your
              doorstep.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="group flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-semibold transition-all hover:bg-green-600"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start your box
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-500 rounded-full font-semibold transition-all hover:bg-green-50">
              Learn more
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold">Free Delivery</h3>
                <p className="text-sm text-gray-600">On orders above $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round the clock service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold">Fresh Guarantee</h3>
                <p className="text-sm text-gray-600">100% fresh or refund</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image section - Order 1 on mobile, 2 on desktop */}
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

export default Hero2;
