"use client";
import React from "react";
import Review from "./Review";
import MobileReview from "./MobileReview";

const Testimonial = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center flex-col overflow-hidden gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">What Our Customers Say</h1>
        <p className="w-2/3 text-center">
          Don't just take our word for it. Here's what our happy customers have
          said about their experience.
        </p>
      </div>
      <div className="w-full px-20 hidden md:block">
        <Review />
      </div>
      <div className="w-full px-2 md:px-20 block md:hidden">
        <MobileReview/>
      </div>
    </div>
  );
};

export default Testimonial;
