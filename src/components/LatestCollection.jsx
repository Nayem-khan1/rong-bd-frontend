import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ui/ProductItemSkeleton";

const LatestCollection = () => {
  const { products, isProductLoading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const SKELETON_COUNT = 10;

  return (
    <div className="">
      <div className="text-center pb-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the latest trends in fashion with our handpicked selection of
          stylish and comfortable apparel for Men, Women, and Kids. From
          everyday essentials to bold statement pieces — shop what’s trending
          this season.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {isProductLoading
          ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <ProductItemSkeleton key={idx} />
            ))
          : latestProducts.map((item, index) => (
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

export default LatestCollection;
