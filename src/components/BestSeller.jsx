import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ui/ProductItemSkeleton";

const BestSeller = () => {
  const { products, isProductLoading } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  const SKELETON_COUNT = 5;

  return (
    <div className="">
      <div className="text-center text-3xl pb-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our top-selling items, trusted for their comfort, quality, and
          design. Whether you're dressing up or keeping it casual, our best
          sellers are wardrobe staples that never go out of style.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isProductLoading
          ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <ProductItemSkeleton key={idx} />
            ))
          : bestSeller.map((item, index) => (
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
  );
};

export default BestSeller;
