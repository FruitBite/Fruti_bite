"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const Form = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false });
  const formControls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    phoneNo: "",
    email: "",
    address: "",
    area: "",
    plan: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(false);

    try {
      const response = await fetch("/api/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          userName: "",
          phoneNo: "",
          email: "",
          address: "",
          area: "",
          plan: "",
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      setSubmitError(true);
    }
  };

  return (
    <motion.div className="relative w-full py-8" ref={formRef}>
      <div className="mx-auto px-5 flex items-center flex-col gap-5">
        <div>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate={formControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold text-center"
          >
            <span className="text-PRIMARY">Order</span> Now
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

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 rounded-lg bg-green-50 border border-green-200"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Thank You for Submitting!
            </h2>
            <p className="text-green-700">We'll get back to you soon.</p>
          </motion.div>
        ) : (
          <>
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
              className="hidden md:block absolute top-1/2 left-20 -translate-y-1/2"
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

            {submitError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full md:w-1/2 p-4 mb-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-600 text-center">
                  Failed. Please contact os on WhatsApp.
                </p>
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              className="rounded-lg border-[.1rem] border-PRIMARY p-5 flex-col gap-5 md:w-1/2"
              variants={variants}
              initial="hidden"
              animate={formControls}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  className="border-gray-300 p-2 w-1/2 text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
                />
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="Phone"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  className="border-gray-300 p-2 w-1/2 text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem] mb-4"
              />

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem] mb-4"
              ></textarea>

              <input
                type="text"
                name="area"
                placeholder="Area"
                value={formData.area}
                onChange={handleChange}
                required
                className="border-gray-300 p-2 w-full text-black placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem] mb-4"
              />

              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="border-gray-300 w-full p-2 text-black rounded-lg outline-none focus:ring-2 focus:ring-PRIMARY focus:border-transparent border-[.1rem] mb-4"
                required
              >
                <option value="" disabled>
                  Select Plan
                </option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>

              <div className="mb-6 mt-2">
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
          </>
        )}
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
              Chat with Us
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
