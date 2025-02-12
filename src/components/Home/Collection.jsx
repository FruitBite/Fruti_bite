// import Image from "next/image";
// import React from "react";
// import Collection_bar from "../Client_comp/Collection_bar";

// const Collection = () => {
//   return (
//     <div className=" bg-white flex items-center justify-center flex-col gap-24 pb-20 mt-5 md:mt-0">
//       <div>
//         <div className="text-gray-400 relative">
//           <Image
//             src="/Leaf.png"
//             alt="Leaf image"
//             width={200}
//             height={0}
//             className="w-28 rounded-full absolute -top-14 -left-16 -rotate-45"
//           />
//           <h1 className="text-2xl lg:text-4xl font-bold">OUR</h1>
//         </div>
//         <h1 className="text-PRIMARY text-3xl lg:text-6xl font-bold ml-10">COLLECTIONS</h1>
//       </div>
//       <Collection_bar/>
//     </div>
//   );
// };

// export default Collection;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { collections } from "@/utils/collection";
import { collection_names } from "@/utils/collection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Collection = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const filteredCollections =
    activeTab === "ALL"
      ? collections
      : collections.filter((item) => item.plan === activeTab);
  return (
    <div className="bg-white flex items-center justify-center flex-col gap-24 pb-20 mt-5 md:mt-20">
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
        <h1 className="text-PRIMARY text-3xl lg:text-6xl font-bold ml-10">
          COLLECTIONS
        </h1>
      </div>

      <div className="flex gap-4 flex-wrap max-md:px-10 max-md:justify-center">
        {collection_names.map((name) => (
          <button
            key={name}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === name
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {filteredCollections.map((item) => (
            <SwiperSlide key={item.id} className="pb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[22rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rotate-[-180deg]"
                  /> 
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {item.plan}
                  </h3>
                  <p className="text-gray-600 text-center">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Collection;
