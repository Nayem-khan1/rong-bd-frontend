import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At LIVEYET, we believe fashion should be effortless, affordable, and
            expressive. From modern essentials to timeless classics, we offer
            high-quality clothing for Men, Women, and Kids. Every piece is
            thoughtfully designed to bring comfort, confidence, and style into
            your everyday life. Proudly based in Bangladesh, we’re on a mission
            to make great fashion accessible to all.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+88 01954496221</li>
            <li>nayemkhan4496@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ liveyet.com -All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
