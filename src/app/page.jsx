import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Collection from "@/components/Home/Collection";
import Form from "@/components/Home/Form";
import Hero from "@/components/Home/Hero";
import HighlightsSection from "@/components/Home/HighlightsSection";
import Howwedo from "@/components/Home/Howwedo";
import Plans from "@/components/Home/Plans";
import Subscribe from "@/components/Home/Subscribe";
// import Testimonial from "@/components/Home/Testimonial";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="collections">
        <Collection />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <section id="contact">
        <Form />
      </section>
      <section>
        <Howwedo />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <HighlightsSection />
      </section>
{/*       <section>
        <Testimonial />
      </section> */}
      <Footer />
    </div>
  );
};

export default page;
