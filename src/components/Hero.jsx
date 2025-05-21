import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { assets } from "../assets/assets"; // Update image imports
import { Link } from "react-router";

const slides = [
  { img: assets.hero_img, alt: "Men’s Urban" },
  { img: assets.banner1, alt: "Elegant Women" },
  { img: assets.banner2, alt: "Playful Kids" },
];

const Hero = () => {
  return (
    <div className="bg-[#fce0e2]">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left Side Text */}
        <div className="lg:w-1/2 text-[#414141] space-y-4 px-4 sm:px-10 pb-4 sm:pb-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-[2px] bg-[#414141] mr-1" />
            <p className="text-sm md:text-base font-medium">OUR PICKS</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl prata-regular leading-snug">
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
        <div className="lg:w-1/2 w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
