import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useSearchParams } from "react-router";
import { Filter, X, Menu } from "lucide-react";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

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
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-3/4 bg-white h-full p-5 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="text-red-600 mb-4 font-semibold flex"
            >
              <X/> Close
            </button>

            {/* Filters go here (reuse same filters) */}
            <div>
              <p className="text-lg font-semibold mb-2">Categories</p>
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 mb-2 text-sm">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={category.includes(cat)}
                    onChange={toggleCategory}
                  />
                  {cat}
                </label>
              ))}

              <p className="text-lg font-semibold mt-4 mb-2">Type</p>
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type} className="flex gap-2 mb-2 text-sm">
                  <input
                    type="checkbox"
                    value={type}
                    checked={subCategory.includes(type)}
                    onChange={toggleSubCategory}
                  />
                  {type}
                </label>
              ))}

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => {
                    applyFilter();
                    setMobileFilterOpen(false);
                  }}
                  className="flex-1 bg-black text-white py-2 "
                >
                  Apply
                </button>
                <button
                  onClick={resetFilters}
                  className="flex-1 border border-gray-400 py-2 text-red-500"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter option */}
      <div className="hidden sm:block min-w-60">
        <div className="hidden sm:flex justify-between items-center ">
          <p className="my-2 text-xl flex items-center gap-2">FILTERS</p>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className={` text-red-600 py-2 px-4 hover:underline sm:block cursor-pointer`}
          >
            CLEAR ALL
          </button>
        </div>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                checked={category.includes("Men")}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                checked={category.includes("Women")}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                checked={category.includes("Kids")}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 mt-6 sm:block`}>
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                checked={subCategory.includes("Topwear")}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                checked={subCategory.includes("Bottomwear")}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                checked={subCategory.includes("Winterwear")}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
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
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              image={item.image}
              id={item._id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
