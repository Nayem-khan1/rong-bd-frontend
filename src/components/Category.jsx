import React from "react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      {/* Category Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CategoryCard title="Men's" img={assets.menCategory} />
        <CategoryCard title="Women's" img={assets.womenCategory} />
        <CategoryCard title="Kid's" img={assets.kidsCategory} />
      </div>
    </div>
  );
};

export default Category;
