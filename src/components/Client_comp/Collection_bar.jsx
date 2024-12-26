"use client";
import { collection_names, collections } from "@/utils/collection";
import Image from "next/image";
import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Collection_bar = () => {
  const [isActiveindex, setisActiveindex] = useState(0);
  const [planname, setplanname] = useState("ALL");

  const filteredCollections = collections.filter(
    (item) => planname === "ALL" || item.plan === planname
  );

  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 h-fit">
      <div className="flex gap-10 flex-wrap items-center justify-center">
        {collection_names.map((name, index) => {
          return (
            <button
              onClick={() => {
                setisActiveindex(index);
                setplanname(name);
              }}
              className={`${
                isActiveindex === index
                  ? "bg-SECONDARY text-white"
                  : "bg-transparent"
              } p-2 rounded-lg text-base`}
              key={index}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="flex gap-10 flex-wrap justify-center px-2">
        {filteredCollections.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full py-5 px-4 text-white z-20 flex flex-col gap-4">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-white/40 flex gap-5 w-fit rounded-full"
                >
                  Order <MoveRight />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection_bar;
