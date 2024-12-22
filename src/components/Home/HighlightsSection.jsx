import React from "react";
import HSBox from "../HSBox";
import { Users,Star,Clock,ShieldCheck } from "lucide-react";

const HighlightsSection = () => {
  return (
    <div className="py-20 w-full bg-PRIMARY md:px-20 px-10">
      <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-8">
        <HSBox icons={<Users/>} title={"10k+"} paragraph={"Happy Customers"}/>
        <HSBox icons={<Star/>} title={"4.9"} paragraph={"Average Rating"}/>
        <HSBox icons={<Clock/>} title={"Before 9AM"} paragraph={"Daily one box"}/>
        <HSBox icons={<ShieldCheck/>} title={"Holiday"} paragraph={"Sunday Holiday, Festivals and leaves will be carry forwarded"}/>
      </div>
    </div>
  );
};

export default HighlightsSection;
