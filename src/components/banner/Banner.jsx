import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-primary font-bold">
              Mid-Year Fashion Sale 🎉
            </span>{" "}
          </h1>

          <p className="text-gray-500">
            Get up to 50% off on selected styles. Limited time only!
          </p>
        </div>
        <Link
          to="/collection"
          className="text-sm font-serif font-medium px-6 py-2 bg-primary text-center rounded-full text-white hover:bg-primary"
        >
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default Banner;
