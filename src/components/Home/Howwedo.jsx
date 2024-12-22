import React from "react";
import Box_comp from "../Box_comp";
import { Box, Truck, Leaf } from "lucide-react";
const Howwedo = () => {
  return (
    <div className="bg-PRIMARY w-full px-10 py-20">
    <div className="grid md:grid-cols-3 gap-8">
        <Box_comp
          icons={<Leaf />}
          title={"100% Natural"}
          paragraph={"All our fruit plans are Healthy and tasty"}
        />
        <Box_comp
          icons={<Truck />}
          title={"Fast Delivery"}
          paragraph={
            "Every day Morning delivery before 9 AM. All days Stay Healthy with PhalBites."
          }
        />
        <Box_comp
          icons={<Box />}
          title={"Hygiene Boxes"}
          paragraph={
            "We make sure to provide the Hygienic boxes daily for better Health."
          }
        />
      </div>
    </div>
  );
};

export default Howwedo;
