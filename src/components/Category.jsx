import React from "react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";
import Title from "./Title";

const Category = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"SHOP BY"} text2={"CATEGORY"} />
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
