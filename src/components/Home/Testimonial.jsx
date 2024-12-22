"use client";
import React from "react";
import Review from "./Review";

const Testimonial = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">What Our Customers Say</h1>
        <p className="w-2/3 text-center">
          Don't just take our word for it. Here's what our happy customers have
          said about their experience.
        </p>
      </div>
      <Review />
    </div>
  );
};

export default Testimonial;
