import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";
import Drawer from "../components/ui/Drawer";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = (id, size) => {
    addToCart(id, size);
    if (size) {
      setIsDrawerOpen(true);
    }
  };

  return productData ? (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <InnerImageZoom src={image} />
          </div>
        </div>
        {/* Product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`cursor-pointer py-2 px-4 bg-gray-100 ${
                    item === size ? "border border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(productData._id, size)}
            className="bg-primary text-white px-8 py-3 text-sm active:bg-secondary cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="text-gray-300 mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 Days</p>
          </div>
        </div>
      </div>

      {/* Description and Review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            Elevate your everyday wardrobe with our Classic Cotton Linen Blend
            Shirt — a timeless piece designed for both comfort and style.
            Crafted from a breathable cotton-linen blend, this shirt offers a
            lightweight and airy feel that’s perfect for warmer days or layered
            looks. Featuring a tailored yet relaxed fit, it pairs effortlessly
            with jeans, chinos, or even shorts for a smart-casual vibe. The
            button-down front, adjustable cuffs, and subtle stitching details
            reflect quality craftsmanship that lasts. Whether you're heading to
            brunch, the office, or a weekend getaway, this versatile piece will
            keep you looking sharp without sacrificing comfort.
          </p>
          <p>
            Experience effortless style and all-day comfort with our Cotton
            Linen Casual Shirt, crafted for those who appreciate laid-back
            elegance. Made from a breathable blend of cotton and linen, this
            shirt keeps you cool and comfortable whether you're at the office,
            out for brunch, or enjoying a weekend getaway. The lightweight
            fabric feels soft against the skin, while the classic button-down
            design and subtle texture give it a timeless appeal that works in
            every season.
          </p>
          <p>
            Designed with versatility in mind, this shirt features a relaxed yet
            structured fit that pairs effortlessly with jeans, chinos, or
            shorts. A chest pocket, button cuffs, and curved hemline add
            thoughtful details, making it easy to dress up or down. Whether
            you're layering it over a tee or wearing it solo, this shirt will
            quickly become a go-to staple in your wardrobe.
          </p>
        </div>
      </div>
      {/* disply related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
