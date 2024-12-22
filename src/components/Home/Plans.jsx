import React from "react";
import Image from "next/image";
import { Plan_name } from "@/utils/Plans";

const Plans = () => {
  return (
    <div className="w-full h-fit md:h-screen flex flex-col gap-10 items-center bg-PRIMARY relative pb-20 md:pb-0">
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
        {Plan_name.map((item, index) => {
          return (
            <div
              key={index}
              className="w-64 h-72 rounded-lg md:w-80 md:h-80 px-5  bg-white/30 text-black flex justify-center gap-4 flex-col "
            >
              <div>
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="text-sm text-black">{item.value}</p>
              </div>
              <div>
                <span className="text-2xl font-bold">₹{item.price}</span>/month
              </div>
              <ul>
                {item.items.map((giveitems, index) => {
                  return (
                    <li className="flex gap-2" key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check w-7 h-7 text-SECONDARY flex-shrink-0 font-semibold"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {giveitems}
                    </li>
                  );
                })}
              </ul>
              <a
                href="#contact"
                className="bg-SECONDARY/70 hover:bg-SECONDARY text-white p-2 rounded-full text-center font-semibold text-xs"
              >
                Get Started
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
