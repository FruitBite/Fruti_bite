"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Box_comp = ({ icons, title, paragraph }) => {
  return (
    <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all group hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10">
      <div className="mb-6 w-12 h-12 rounded-lg  p-2 flex items-center justify-center text-white bg-SECONDARY group-hover:bg-white group-hover:text-SECONDARY">
        {icons}
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4 group-hover:text-SECONDARY transition-colors">
          {title}
        </h1>
      </div>
      <div>
        <p className="text-gray-950">{paragraph}</p>
      </div>
      <div>
        <button className="mt-6 flex items-center gap-2 p-2 text-sm  transition-colors  text-black">
          Learn more
          <div className=" group-hover:translate-x-1 transition-transform">
            <MoveRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Box_comp;
