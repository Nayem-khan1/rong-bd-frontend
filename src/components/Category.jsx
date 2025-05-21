import React from "react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      {/* Category Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CategoryCard title="Men" img={assets.hero_img} />
        <CategoryCard title="Women" img={assets.banner1} />
        <CategoryCard title="Kids" img={assets.banner2} />
      </div>
    </div>
  );
};

export default Category;
