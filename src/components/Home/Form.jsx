"use client";
import { motion } from "framer-motion";

const OrderForm = () => {
  return (
    <motion.div
      className="bg-PRIMARY p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        Order Now
      </h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        Have questions or special requirements? Our team is here to help you
        with anything you need.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-white mb-2">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg text-black"
            placeholder="Enter your email"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white mb-2">
              Select State
            </label>
            <select className="w-full px-4 py-2 rounded-lg text-black">
              <option>Select State</option>
              <option>State 1</option>
              <option>State 2</option>
              <option>State 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-white mb-2">Select City</label>
            <select className="w-full px-4 py-2 rounded-lg text-black">
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-white mb-2">Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg text-black"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="block text-sm text-white mb-2">Area</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg text-black"
            placeholder="Enter your area"
          />
        </div>

        <div>
          <label className="block text-sm text-white mb-2">Select Plan</label>
          <select className="w-full px-4 py-2 rounded-lg text-black">
            <option>Select Plan</option>
            <option>Plan 1</option>
            <option>Plan 2</option>
            <option>Plan 3</option>
          </select>
        </div>

x        <div className="mt-6">
          <iframe
            className="w-full h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.737269657026!2d78.47823061451369!3d17.404526220251083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9132452a379b%3A0x60c5685b4d6c62cc!2sGoogle%20Headquarters!5e0!3m2!1sen!2sus!4v1634527059429!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg">
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default OrderForm;
