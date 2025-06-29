import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { Link } from "react-router";

const Offer = () => {
  return (
    <div className="">
      {/* Section Title */}
      <div className="text-center text-3xl pb-8">
        <Title text1={"SPECIAL "} text2={"OFFER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Limited Time Deal
        </p>
      </div>

      {/* Offer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-secondary text-white text-center">
        {/* Offer Text */}
        <div className="py-10 flex-1">
          <div className="flex justify-center mb-4">
            <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-50"></div>
          </div>
          <p className="text-2xl sm:text-3xl font-semibold py-3">
            GET 10% OFF ON YOUR
          </p>
          <p className="text-2xl sm:text-3xl font-semibold">FIRST ORDER</p>
          <Link to="/collection">
            <button className="mt-6 sm:mt-10 border border-white bg-white text-black px-8 py-4 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
              EXPLORE PRODUCTS
            </button>
          </Link>
        </div>

        {/* Offer Image */}
        <div className="bg-[#DCDCDC] flex justify-center items-center flex-1">
          <img
            src={assets.offerImage}
            className="w-full h-auto object-contain"
            alt="Offer Product"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
