import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

const MobileReview = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      feedback:
        "The Silver plan is an absolute steal! The fruits are fresh, and the vegetables were locally sourced, which made a huge difference in the taste. The sprouts were a nice touch too. Highly recommended for anyone looking for healthy and affordable options.",
    },
    {
      id: 2,
      name: "Priya Patel",
      feedback:
        "I opted for the Gold plan, and it was worth every penny! The premium selection of fruits and the dry fruits were perfect for my diet. I loved how fresh the vegetables and sprouts were. The packaging was also neat and eco-friendly. Excellent service!",
    },
    {
      id: 3,
      name: "Rahul Desai",
      feedback:
        "Fantastic service! I’ve tried many meal delivery services, but this one stands out. The Gold plan was a great choice, and I felt the quality of everything from the fruits to the vegetables was top-notch. Great value for money!",
    },
    {
      id: 4,
      name: "Anjali Reddy",
      feedback:
        "I’ve been using their meal export service for a month now, and I am very impressed. The Silver plan is perfect for my family, providing a good variety of fresh fruits and veggies. The sprouts are always fresh, and the service is consistently reliable.",
    },
    {
      id: 5,
      name: "Vikram Singh",
      feedback:
        "The Gold plan was an excellent choice! I loved the assortment of dry fruits, and the fruits were always fresh and of high quality. I also appreciate how the items are sourced locally, which makes me feel good about supporting sustainable farming.",
    },
    {
      id: 6,
      name: "Neha Gupta",
      feedback:
        "I ordered the Silver plan last week, and I’m already a repeat customer. The variety of fruits and vegetables is fantastic, and everything tastes so fresh. It's perfect for my health-conscious lifestyle, and I love the convenience of having it delivered to my doorstep.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-6 ">
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        <Swiper
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-PRIMARY text-black p-6 rounded-lg shadow-lg w-full mx-auto mb-6">
                <div className="flex flex-col items-center justify-center p-4 w-full">
                  <p className="text-sm text-center text-black italic mb-4">
                    “{testimonial.feedback}”
                  </p>
                  <p className="text-sm font-semibold text-center text-gray-900 mb-2">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileReview;
