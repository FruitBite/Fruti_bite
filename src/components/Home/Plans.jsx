import React from "react";
import Image from "next/image";
import { Plan_name } from "@/utils/Plans";

const Plans = () => {
  return (
    <div className="w-full h-fit md:h-screen flex flex-col gap-10 items-center  bg-PRIMARY relative">
      <Image
        src="/Nuts.png"
        alt="Nuts"
        width={500}
        height={0}
        className="w-56 absolute -top-16 left-0 md:left-10"
      />
      <div className="py-10 mt-16 md:mt-0">
        <div className="text-white relative">
          <Image
            src="/Leaf.png"
            alt="Leaf image"
            width={200}
            height={0}
            className="w-28 rounded-full absolute -top-14 -left-16 -rotate-45"
          />
          <h1 className="text-4xl font-bold">OUR</h1>
        </div>
        <h1 className="text-black text-6xl font-bold ml-10">Plans</h1>
      </div>
      <div className="flex gap-10 flex-wrap items-center justify-center">
        {Plan_name.map((item,index) => {
          return <div key={index} className="rounded-lg w-72 h-72 p-2 bg-white/40">{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Plans;
