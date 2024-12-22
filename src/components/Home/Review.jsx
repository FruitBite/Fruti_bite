"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This service has changed my life! Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I love the quality and care they put into their work. Excellent!",
  },
  {
    id: 3,
    name: "Mark Johnson",
    text: "A wonderful experience from start to finish. Will use again!",
  },
  {
    id: 4,
    name: "Alice Brown",
    text: "Great quality and fresh fruits delivered on time. Highly satisfied!",
  },
  {
    id: 5,
    name: "Bob White",
    text: "The service is incredible and the taste is out of this world!",
  },
  {
    id: 6,
    name: "Sara Lee",
    text: "I can't get enough of the products, they are just amazing!",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsToShow = testimonials.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0); // Reset to the first set
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    } else {
      setCurrentIndex(testimonials.length - 3); // Go to the last set
    }
  };

  return (
    <div className="relative w-full bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}  // Start from right side
            animate={{ opacity: 1, x: 0 }}   // Slide in
            exit={{ opacity: 0, x: -50 }}    // Slide out to the left when leaving
            transition={{ duration: 0.5 }}
          >
            {testimonialsToShow.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center p-6 bg-PRIMARY shadow-lg rounded-lg"
              >
                <p className="text-lg italic">"{testimonial.text}"</p>
                <p className="font-bold mt-4">{testimonial.name}</p>
              </div>
            ))}
          </motion.div>

          {/* Prev and Next Buttons */}
          <div className="flex justify-between mt-8 w-full max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="bg-PRIMARY text-black py-2 px-6 rounded-full transition-all"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-PRIMARY text-black py-2 px-6 rounded-full transition-all"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
