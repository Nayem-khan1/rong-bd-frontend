import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ title, img }) => {
  return (
    <Link to={`/collection/${title.toLowerCase()}`}>
      <div className="relative group overflow-hidden shadow hover:shadow-lg transition">
        <img
          src={img}
          alt={title}
          className="w-full max-h-[200px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-xl font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
