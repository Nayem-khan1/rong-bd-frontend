import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            1209 Sattmoshjid Road <br /> Dhanmondi, Dhaka, Bangladesh
          </p>
          <p className="text-gray-500">
            Tel: 01954496221 <br /> Email: nayemkhan4496@gmail.com
          </p>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-primary px-8 py-4 text-sm hover:bg-secondary hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className="py-10">
        <NewsletterBox />
      </div>
    </div>
  );
}

export default Contact;
