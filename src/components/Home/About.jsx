import Image from "next/image";
import React from "react";
import Button from "../Button";

const About = () => {
  return (
    <div className="w-full md:h-[90vh] flex md:flex-row flex-col">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <Image
          src="/FruitBasket.png"
          alt="FruitBowl"
          width={500}
          height={0}
          className="lg:w-[23.688rem] lg:h-[25.875rem]  md:w-[18rem] md:h-[18rem] object-contain hidden md:block"
        />
      </div>
      <div className="relative bg-PRIMARY w-full md:w-1/2 px-10 flex items-center md:items-start justify-center flex-col gap-5 py-10 md:py-0 ">
        <div className="hidden md:absolute -top-8 md:-top-16 -right-12 bg-transparent w-32 h-20 md:w-56 md:h-32 rounded-t-full border-b-0 border-[.8rem] border-[#ffa800] -rotate-90"></div>
        <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[30%] hidden md:block"></div>
        <div className="bg-[#ffd365] h-full w-[.1rem] absolute left-[55%] hidden md:block"></div>
        <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[80%] hidden md:block"></div>

        <div className="z-10">
          <h1 className="text-7xl lg:text-8xl md:text-6xl font-bold text-SECONDARY">
            Green
          </h1>
          <h1 className="text-7xl lg:text-8xl md:text-6xl font-bold text-white ml-10">
            Quality
          </h1>
        </div>
        <p className="text-xl lg:text-xl md:text-base">
          We believe in the power of natural foods to transform lives!
        </p>
        <Button text={"View More"} style={"secondary"} link={"#"} />
        <div className="absolute -bottom-10 right-0 block md:hidden">
          <Image
            src="/Orange.png"
            alt="Orange"
            width={500}
            height={0}
            className="w-20 bg-white p-2 rounded-full"
          />
        </div>
        <div className="w-full  justify-end hidden md:flex">
          <Image
            src="/Orange.png"
            alt="Orange"
            width={500}
            height={0}
            className="w-20 bg-white p-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
