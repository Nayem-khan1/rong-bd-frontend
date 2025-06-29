import React from "react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";
import Title from "./Title";

const Category = () => {
  return (
    <div className="">
      <div className="text-center text-3xl py-8">
        <Title text1={"Featured"} text2={"Categories"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Choose your necessary products from this feature categories
        </p>
      </div>
      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CategoryCard title="Men" img={assets.menCategory} />
        <CategoryCard title="Women" img={assets.womenCategory} />
        <CategoryCard title="Kids" img={assets.kidsCategory} />
      </div>
    </div>
  );
};

export default Category;
