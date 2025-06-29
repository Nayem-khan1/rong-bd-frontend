import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ title, img }) => {
  return (
    <Link to={`/collection?category=${title}`}>
      <div className="relative group overflow-hidden shadow hover:shadow-lg transition rounded-lg">
        {/* Image */}
        <img
          src={img}
          alt={title}
          className="w-full max-h-[200px] object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white backdrop-blur-sm text-white font-semibold tracking-wide hover:scale-105 rounded-md transition-transform">
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Title Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md">
          <h2 className="text-sm font-medium text-gray-900">
            {title} Collection
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
