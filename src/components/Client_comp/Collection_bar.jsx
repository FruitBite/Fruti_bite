"use client";
import { collection_names, collections } from "@/utils/collection";
import React, { useState } from "react";

const Collection_bar = () => {
  const [isActiveindex, setisActiveindex] = useState(0);
  const [planname, setplanname] = useState("ALL");

  const filteredCollections = collections.filter(
    (item) => planname === "ALL" || item.plan === planname
  );

  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 h-fit">
      <div className="flex gap-10">
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
      <div className="flex gap-10 flex-wrap justify-center">
        {filteredCollections.map((item, index) => {
          return (
            <div
              key={index}
              className="w-60 h-60 bg-PRIMARY flex items-center justify-center rounded-lg"
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection_bar;
