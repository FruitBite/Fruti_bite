import React from "react";
import Button from "../Button";
import Image from "next/image";
import { Instagram, MessageCircleMore, X } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-PRIMARY flex items-center justify-center flex-col md:flex-row relative w-full md:bg-white ">
      <div className="w-full flex  justify-center h-[90vh] md:w-1/2 flex-col px-10 leading-loose gap-2">
        <h1 className="text-7xl md:text-6xl lg:text-8xl font-bold text-white md:text-PRIMARY">
          Healthy
        </h1>
        <h1 className="text-7xl md:text-6xl lg:text-8xl font-bold text-SECONDARY">
          Living
        </h1>
        <p className="text-xl md:w-2/3 lg:text-xl">
          Unlock a Healthier, Happier You with Nature's Best!
        </p>
        <div className="hidden md:block">
          <Button text={"View Plans"} style={"primary"} link={"#plans"} />
        </div>
        <div className="block md:hidden">
          <Button text={"View Plans"} style={"secondary"} />
        </div>
      </div>
      <div className="hidden md:block  absolute bg-white p-2 rounded-full md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Image
          src="/FruitBowl.png"
          alt="Fruit bowl"
          width={1000}
          height={0}
          className="w-72 md:w-72 lg:w-96"
        />
      </div>
      <div className="hidden  md:block w-1/2 bg-PRIMARY  h-[90vh]">
        <div className="relative w-full h-full flex  items-center justify-center ">
            <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[30%]"></div>
            <div className="bg-[#ffd365] h-full w-[.1rem] absolute left-[55%]"></div>
            <div className="bg-[#ffd365] h-full w-[.15rem] absolute left-[80%]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-8"><h1 className="font-bold text-6xl text-[#fdc63f]" style={{letterSpacing:"3rem"}}>FRUITS</h1></div>
          <div className="flex gap-5 flex-col items-end w-full px-10">
            <div className="rounded-full bg-white p-2 w-fit">
              <Instagram />
            </div>
            <div className="rounded-full bg-white p-2 w-fit">
              <MessageCircleMore />
            </div>
            <div className="rounded-full bg-white p-2 w-fit">
              <X />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/FruitBowl.png"
        alt="Fruit bowl"
        width={1000}
        height={0}
        className="w-72 md:w-96 p-1 bg-white rounded-full md:hidden"
      />
    </div>
  );
};

export default Hero;
