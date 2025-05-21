import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { assets } from "../assets/assets"; // Update image imports
import { Link } from "react-router";

const slides = [
  { img: assets.women1, alt: "Elegant Women" },
  { img: assets.men6, alt: "Men’s Urban" },
  { img: assets.kids1, alt: "Playful Kids" },
  { img: assets.women2, alt: "Elegant Women" },
  { img: assets.men1, alt: "Men’s Urban" },
  { img: assets.kids2, alt: "Playful Kids" },
  { img: assets.women2, alt: "Elegant Women" },
  { img: assets.men2, alt: "Men’s Urban" },
  { img: assets.kids3, alt: "Playful Kids" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-[#f8e7e8]">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left Side Text */}
        <div className="lg:w-1/2 text-[#414141] space-y-4 px-4 sm:px-10 pb-4 lg:pb-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-[2px] bg-[#414141] mr-1" />
            <p className="text-sm md:text-base font-medium">OUR PICKS</p>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl prata-regular leading-snug lg:py-3">
            DISCOVER STYLE FOR <br /> MEN, WOMEN & KIDS
          </h1>
          <p className="text-base font-medium text-gray-600 max-w-md">
            Shop trendy, comfortable, and elegant pieces from our exclusive 2025
            collections. Made for every mood and every moment.
          </p>
          <div className="flex items-center">
            <Link
              to="/collection"
              className=" inline-block mt-4 sm:mt-8 border border-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            >
              SHOP NOW
            </Link>
            <div className="w-12 h-[2px] bg-[#414141] mt-4 sm:mt-8 ml-3" />
          </div>
        </div>

        {/* Right Side Image Slider */}
        <div className="relative lg:w-1/2 w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
            {/* Progress Indicator */}
          <div className="flex justify-center mt-4 gap-2 absolute bottom-5 left-5 sm:left-[30%] z-10 ">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-black w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
