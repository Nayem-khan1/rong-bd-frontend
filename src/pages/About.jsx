import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At LIVEYET, we’re passionate about helping you express your unique
            style through fashion that’s both modern and timeless. Our
            collections for Men, Women, and Kids are carefully curated to offer
            a perfect blend of comfort, quality, and affordability.
          </p>
          <p>
            We believe clothing should empower you—whether you're dressing up
            for a special occasion or embracing the ease of everyday wear. With
            attention to detail and trend-forward designs, we bring you
            versatile fashion pieces that fit your lifestyle and elevate your
            wardrobe.
          </p>
          <p>
            Founded in Bangladesh, our journey began with a simple idea: fashion
            should be accessible and enjoyable for everyone. Today, we continue
            that mission with a focus on customer satisfaction, ethical
            sourcing, and unmatched value.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission is to inspire confidence and creativity through
            affordable, high-quality fashion. We aim to deliver trend-driven
            styles with lasting quality, allowing our customers to feel their
            best every day. Whether you're shopping for yourself or your family,
            LIVEYET is here to make fashion fun, effortless, and rewarding.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm md-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to using premium fabrics and materials, ensuring
            every garment meets high standards of durability and comfort. Each
            product goes through quality checks so you can shop with confidence.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our online shopping experience is designed to be smooth and simple. With fast delivery, secure payment options, and a user-friendly interface, shopping at LIVEYET is quick, easy, and hassle-free.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Ecceptional Custorme Service:</b>
          <p className="text-gray-600">
            Your satisfaction is our priority. Our dedicated support team is here to assist you with any inquiries, returns, or size guidance—ensuring you always get what fits and feels right.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <NewsletterBox />
      </div>
    </div>
  );
}

export default About;
