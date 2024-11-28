import Image from "next/image";
import React from "react";
import Collection_bar from "../Client_comp/Collection_bar";

const Collection = () => {
  return (
    <div className=" bg-white flex items-center justify-center flex-col gap-24 pb-20 mt-5 md:mt-0">
      <div>
        <div className="text-gray-400 relative">
          <Image
            src="/Leaf.png"
            alt="Leaf image"
            width={200}
            height={0}
            className="w-28 rounded-full absolute -top-14 -left-16 -rotate-45"
          />
          <h1 className="text-2xl lg:text-4xl font-bold">OUR</h1>
        </div>
        <h1 className="text-PRIMARY text-3xl lg:text-6xl font-bold ml-10">COLLECTIONS</h1>
      </div>
      <Collection_bar/>
    </div>
  );
};

export default Collection;

