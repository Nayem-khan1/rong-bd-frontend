import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const slides = [
  {
    img: assets.hero_img,
    heading: "Men’s Urban",
  },
  {
    img: assets.banner1,
    heading: "Elegant Women",
  },
  {
    img: assets.banner2,
    heading: "Playful Kids",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center h-[80vh] bg-gray-50 overflow-hidden">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].heading}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#414141] space-y-4"
          >
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">OUR PICKS</p>
            </div>
            <h1 className="text-3xl lg:text-5xl prata-regular">
              {slides[index].heading}
            </h1>
            <Link to="/collection" className="inline-flex items-center gap-2">
              <span className="font-semibold text-sm md:text-base">SHOP NOW</span>
              <span className="w-8 md:w-11 h-[1px] bg-[#414141]"></span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].img}
            src={slides[index].img}
            alt={`Slide ${index + 1}`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
