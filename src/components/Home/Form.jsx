"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const Form = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false });
  const formControls = useAnimation();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    if (isInView) {
      formControls.start("visible");
    } else {
      formControls.start("hidden");
    }
  }, [isInView, formControls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <motion.div className="relative w-full py-8" ref={formRef}>
      <div className="mx-auto px-5 flex items-center flex-col gap-5 ">
        <div>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate={formControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold text-center"
          >
            <span className="text-PRIMARY"> Order </span>Now
          </motion.h1>
          <motion.p
            className="text-center"
            variants={variants}
            initial="hidden"
            animate={formControls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Have questions or special requirements? Our team is here to help you
            with anything you need.
          </motion.p>
        </div>
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" hidden md:block absolute top-1/2 left-20 -translate-y-1/2"
        >
          <Image src="/vitMG.png" alt="vitMG" width={100} height={100} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block md:hidden absolute -bottom-14 z-10"
        >
          <Image src="/vitMG.png" alt="vitMG" width={80} height={100} />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="hidden rounded-lg border-[.1rem] border-black p-5  flex-col gap-5 md:w-1/2"
          variants={variants}
          initial="hidden"
          animate={formControls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              required
              className="border-gray-300 p-2 w-1/2 text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
            />
            <input
              type="text"
              placeholder="Phone"
              aria-label="Phone"
              required
              className="border-gray-300 p-2 w-1/2 text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            required
            className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
          />
          <textarea
            className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
            placeholder="Address"
            aria-label="Address"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Area"
            aria-label="Area"
            required
            className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
          />
          <select
            className="border-gray-300 w-full p-2 text-black rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
            aria-label="Select Plan"
            required
          >
            <option disabled>
              Select Plan
            </option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
          </select>
          <div className="mt-6">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7779.771348542994!2d77.64877300000002!3d12.85066!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUxJzAyLjQiTiA3N8KwMzknMDQuOSJF!5e0!3m2!1sen!2sin!4v1735133907281!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-full bg-PRIMARY/90 text-white hover:bg-PRIMARY transition"
          >
            Submit
          </button>
        </motion.form>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={formControls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/scanner.jpg"
            alt="scanner"
            width={500}
            height={100}
            className="rounded-lg w-auto h-auto"
          />
          <div className="flex items-center justify-center py-5 gap-3">
            <a
              href="tel:9945322622"
              className="bg-PRIMARY rounded-full px-3 py-2 shadow-md shadow-PRIMARY/10 text-xl"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/9945322622"
              className="bg-white rounded-full px-3 py-2 shadow-md shadow-black/10 text-xl "
            >
              For Chat
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block absolute md:top-20 md:right-20 -translate-y-1/2"
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
          <Image src="/vitA.png" alt="vitMG" width={100} height={100} />
        </motion.div>

        <motion.div
          className="block md:hidden absolute -top-10 right-3 -translate-y-1/2"
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
          <Image src="/vitA.png" alt="vitMG" width={80} height={100} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Form;
