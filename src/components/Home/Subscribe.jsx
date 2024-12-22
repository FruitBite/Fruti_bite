import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="backdrop-blur-lg bg-PRIMARY border  rounded-3xl p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Stay Fresh</h1>
          <p className="mb-8">
            Subscribe to our newsletter for exclusive offers and fruit tips.
          </p>
          <form className="flex-col md:flex-row flex gap-2 items-center justify-center">
            <input
              type="email"
              name=""
              placeholder="Enter your email"
              className="border-white border-[.1rem] rounded-lg md:rounded-full bg-white p-2 md:w-96 outline-none"
            />
            <button className="bg-SECONDARY p-2  rounded-lg md:rounded-full font-medium text-white">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
