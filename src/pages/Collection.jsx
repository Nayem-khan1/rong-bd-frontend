import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useSearchParams } from "react-router";
import { Filter, X, Menu } from "lucide-react";
import ProductItemSkeleton from "../components/ui/ProductItemSkeleton";

const Collection = () => {
  const { products, search, showSearch, isProductLoading } =
    useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const SKELETON_COUNT = 20;

  let [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  // Load initial category from URL
  useEffect(() => {
    if (initialCategory && !category.includes(initialCategory)) {
      setCategory([initialCategory]);
    }
  }, [initialCategory]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const resetFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300 relative">
        {/* Mobile Filter Button */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 border border-gray-300 px-3 py-1"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
        {/* Overlay Filter Menu for Mobile */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end transition-opacity">
            <div className="w-[85%] max-w-sm bg-gray-50 h-full p-6 overflow-y-auto shadow-2xl flex flex-col">
              {/* Close Button */}
              <div className="flex items-center justify-between pl-1 pb-6 mb-2 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-2 bg-white rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm border border-gray-100"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Filters go here (reuse same filters) */}
              <div className="flex-1 overflow-y-auto py-2">
                <div className="bg-white p-5 border border-gray-100 shadow-sm mb-6 mt-4">
                  <p className="mb-4 text-xs font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
                    Categories
                  </p>
                  <div className="flex flex-col gap-3.5 text-sm font-semibold text-gray-700">
                    {["Men", "Women", "Kids"].map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <div className="relative flex items-center justify-center w-5 h-5">
                          <input
                            className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                            type="checkbox"
                            value={cat}
                            checked={category.includes(cat)}
                            onChange={toggleCategory}
                          />
                          <svg
                            className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5L5 9L13 1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          className={`transition-colors duration-200 ${category.includes(cat) ? "text-primary font-bold" : ""}`}
                        >
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 border border-gray-100 shadow-sm mb-6">
                  <p className="mb-4 text-xs font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
                    Type
                  </p>
                  <div className="flex flex-col gap-3.5 text-sm font-semibold text-gray-700">
                    {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        <div className="relative flex items-center justify-center w-5 h-5">
                          <input
                            className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                            type="checkbox"
                            value={type}
                            checked={subCategory.includes(type)}
                            onChange={toggleSubCategory}
                          />
                          <svg
                            className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5L5 9L13 1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          className={`transition-colors duration-200 ${subCategory.includes(type) ? "text-primary font-bold" : ""}`}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3 pt-4 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={resetFilters}
                  className="w-1/3 py-3.5 rounded-2xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => {
                    applyFilter();
                    setMobileFilterOpen(false);
                  }}
                  className="w-2/3 bg-gray-900 text-white rounded-2xl text-sm font-bold shadow-md hover:bg-primary transition-colors hover:-translate-y-0.5"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter option */}
        <div className="hidden sm:block min-w-64 max-w-xs">
          <div className="hidden sm:flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 tracking-tight">
              FILTERS
            </h3>

            {/* Reset Button */}
            {(category.length > 0 || subCategory.length > 0) && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors uppercase tracking-widest cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>
          {/* Category Filter */}
          <div className="border border-gray-100 bg-white shadow-sm p-6 mb-6">
            <p className="mb-4 text-xs font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
              CATEGORIES
            </p>
            <div className="flex flex-col gap-3.5 text-sm font-semibold text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                      type="checkbox"
                      value={cat}
                      checked={category.includes(cat)}
                      onChange={toggleCategory}
                    />
                    <svg
                      className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className={`transition-colors duration-200 ${category.includes(cat) ? "text-primary font-bold" : "group-hover:text-primary"}`}
                  >
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* SubCategory Filter */}
          <div className="border border-gray-100 bg-white shadow-sm p-6 mb-6">
            <p className="mb-4 text-xs font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
              TYPE
            </p>
            <div className="flex flex-col gap-3.5 text-sm font-semibold text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                      type="checkbox"
                      value={type}
                      checked={subCategory.includes(type)}
                      onChange={toggleSubCategory}
                    />
                    <svg
                      className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className={`transition-colors duration-200 ${subCategory.includes(type) ? "text-primary font-bold" : "group-hover:text-primary"}`}
                  >
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTION"} />
            {/* Product Sort*/}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {isProductLoading
              ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                  <ProductItemSkeleton key={idx} />
                ))
              : filterProducts.map((item, index) => (
                  <ProductItem
                    key={index}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    id={item._id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
